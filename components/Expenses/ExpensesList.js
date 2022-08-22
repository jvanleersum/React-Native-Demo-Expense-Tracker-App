import { View, Text, FlatList, StyleSheet } from "react-native";
import ExpensesListTile from "./ExpensesListTile";

const ExpensesList = ({expenses}) => {
  const renderExpenseItem = (itemData) => {
    return <ExpensesListTile />
  }

  return (
    <View style={styles.container}>
      <FlatList data={expenses} renderItem={renderExpenseItem} />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
