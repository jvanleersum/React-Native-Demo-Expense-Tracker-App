import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "New pair of shoes",
    amount: 28.89,
    date: new Date("2022-01-29"),
  },
  {
    id: "e2",
    title: "10 books",
    amount: 50.92,
    date: new Date("2022-03-29"),
  },
  {
    id: "e3",
    title: "Great new laptop",
    amount: 291.99,
    date: new Date("2022-06-29"),
  },
  {
    id: "e4",
    title: "Glass of water",
    amount: 1.59,
    date: new Date("2022-08-11"),
  },
  {
    id: "e5",
    title: "A few beers",
    amount: 7.99,
    date: new Date("2022-08-20"),
  },
];

const AllExpenses = () => {
  return (
    <View style={styles.container}>
      <ExpensesOutput items={DUMMY_EXPENSES} expensePeriod="All"/>
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
