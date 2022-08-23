import { View, Text, StyleSheet } from "react-native";

import ExpenseSummary from "./ExpenseSummary";
import ExpensesList from "./ExpensesList";
import Colors from "../../constants/colors";

const ExpensesOutput = ({ items, expensePeriod, fallbackText }) => {
  const hasExpenses = items.length > 0;

  return (
    <View style={styles.container}>
      <ExpenseSummary expensePeriod={expensePeriod} expenses={items} />
      {hasExpenses && <ExpensesList expenses={items} />}
      {!hasExpenses && (
        <Text style={styles.fallbackText}>
          {fallbackText}
        </Text>
      )}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 0,
  },
  fallbackText: {
    textAlign: "center",
    margin: 16,
    padding: 8,
    color: Colors.primary200,
    fontStyle: "italic",
  },
});
