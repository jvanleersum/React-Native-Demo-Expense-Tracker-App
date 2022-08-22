import { View, Text, StyleSheet } from "react-native";

const ManageExpense = () => {
  return (
    <View style={styles.container}>
      <Text>Manage Expense</Text>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
