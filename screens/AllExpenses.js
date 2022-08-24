import { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import ExpensesContext from "../store/expenses-context";
import { fetchExpenses } from "../utils/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const AllExpenses = () => {
  const [isLoading, setIsLoading] = useState(true);
  const expCtx = useContext(ExpensesContext);
  const expenses = expCtx.expenses;

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      setIsLoading(false);
      expCtx.setExpenses(expenses);
    }
    getExpenses()
  }, [])

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
