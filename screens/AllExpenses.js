import { View, Text, StyleSheet } from "react-native";

const AllExpenses = () => {
  return (
    <View style={styles.container}>
      <Text>All Expenses</Text>
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
