import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const ExpensesListTile = () => {
  return (
    <View style={styles.container}>
        <Text>Last 7 days</Text>
        <Text>€273.90</Text>
      </View>
  );
};

export default ExpensesListTile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderRadius: 8
  }
});
