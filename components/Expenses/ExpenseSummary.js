import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const ExpenseSummary = ({expenses, expensePeriod}) => {
  const expenseTotal = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  return (
    <View style={styles.container}>
      <Text style={styles.periodText}>{expensePeriod}</Text>
      <Text style={styles.totalText}>€{expenseTotal.toFixed(2)}</Text>
    </View>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    borderRadius: 8,
    marginBottom: 16
  },
  periodText: {
    fontSize: 12,
    color: Colors.primary400
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary500
  }
  });
