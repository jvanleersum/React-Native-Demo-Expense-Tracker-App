import { View,StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";

import ExpensesContext from "../store/expenses-context";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";


const RecentExpenses = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const expCtx = useContext(ExpensesContext)

  useEffect(() => {
    const getExpenses = async () => {
      try {
        const expenses = await fetchExpenses();
        expCtx.setExpenses(expenses);
      } catch (error) {
        setError("Could not fetch expenses!")
      }
      setIsLoading(false);
    }
    getExpenses()
  }, [])


  const recentExpenses = expCtx.expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7);
    return expense.date > sevenDaysAgo
  })

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
      <ExpensesOutput items={recentExpenses} expensePeriod="Last 7 days" fallbackText="There are no expenses in the last 7 days"/>
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
