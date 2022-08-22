import { View, StyleSheet } from "react-native";

import ExpenseSummary from "./ExpenseSummary";
import ExpensesList from "./ExpensesList";

const ExpensesOutput = ({items, expensePeriod}) => {
  return (
    <View style={styles.container}>
      <ExpenseSummary expensePeriod={expensePeriod} expenses={items} />
      <ExpensesList expenses={items}/>
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  }})