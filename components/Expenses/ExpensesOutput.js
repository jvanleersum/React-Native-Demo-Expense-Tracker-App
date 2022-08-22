import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

import ExpenseSummary from "./ExpenseSummary";
import ExpensesList from "./ExpensesList";

const ExpensesOutput = ({items}) => {
  return (
    <View style={styles.container}>
      <ExpenseSummary expensePeriod={"Last 7 days"} expenses={items} />
      <ExpensesList expenses={items}/>
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }})