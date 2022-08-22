import { View, Text, StyleSheet } from "react-native";

const RecentExpenses = () => {
  return (
    <View style={styles.container}>
      <Text>Recent Expenses</Text>
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
