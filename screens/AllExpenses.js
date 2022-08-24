import { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import ExpensesContext from "../store/expenses-context";
import { fetchExpenses } from "../utils/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const AllExpenses = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const expCtx = useContext(ExpensesContext);
  const expenses = expCtx.expenses;

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const expenses = await fetchExpenses();
        expCtx.setExpenses(expenses);
      } catch (error) {
        setError('Could not fetch expenses!');
      }
      setIsLoading(false);
    }
    getExpenses()
  }, [])

  const errorHandler = () => {
    setError(null);
  }

  if (error && !isLoading) {
    return <ErrorOverlay message={error} onConfirm={errorHandler}/>
  }

  if (isLoading) {
    return <LoadingOverlay />
  }

  return (
    <View style={styles.container}>
      <ExpensesOutput items={expenses} expensePeriod="All" fallbackText="There are no expenses yet"/>
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
