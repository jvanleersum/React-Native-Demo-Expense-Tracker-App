import { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import ExpensesContext from "../store/expenses-context";
import { fetchExpenses } from "../utils/http";

const AllExpenses = () => {
  const expCtx = useContext(ExpensesContext);
  const expenses = expCtx.expenses;

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      expCtx.setExpenses(expenses);
    }
    getExpenses()
  }, [])

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
