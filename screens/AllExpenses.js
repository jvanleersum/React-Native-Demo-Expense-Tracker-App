import { View, Text, StyleSheet } from "react-native";
import ExpensesList from "../components/Expenses/ExpensesList";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import ExpenseSummary from "../components/Expenses/ExpenseSummary";

const DUMMY_EXPENSES = [{
  id: "e1",
  title: "New pair of shoes",
  amount: 28.89,
  date: new Date("2022-01-29")
}
]


const AllExpenses = () => {
  return (
    <View style={styles.container}>
      <ExpensesOutput items={DUMMY_EXPENSES}/>
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
