import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import ExpensesContext from "../store/expenses-context";

const AllExpenses = () => {
  const expenses = useContext(ExpensesContext).expenses;

  return (
    <View style={styles.container}>
      <ExpensesOutput items={expenses} expensePeriod="All"/>
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
