import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const ExpenseSummary = ({expenses, expensePeriod}) => {
  const expenseTotal = expenses.reduce((sum, expense) => {sum + expense.amount}, 0)

  return (
    <View style={styles.summary}>
      <Text>{expensePeriod}</Text>
      <Text>€{expenseTotal}</Text>
    </View>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
  summary: {
    backgroundColor: Colors.primary50,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderRadius: 8,
    width: "50%"
  },
});
