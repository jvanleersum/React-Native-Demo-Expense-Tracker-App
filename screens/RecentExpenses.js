import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";

import ExpensesContext from "../store/expenses-context";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { getDateMinusDays } from "../utils/date";


const RecentExpenses = () => {
  const expCtx = useContext(ExpensesContext)
  const recentExpenses = expCtx.expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = getDateMinusDays(today, 7);
    return expense.date > sevenDaysAgo
  })

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
  }
});
