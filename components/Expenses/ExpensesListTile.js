import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const ExpensesListTile = ({expense}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>{expense.title}</Text>
        <Text style={styles.dateText}>{expense.date.toLocaleString('nl-NL')}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>€{expense.amount.toFixed(2)}</Text>
      </View>
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
    borderRadius: 8,
    marginVertical: 8,
  },
  titleText: {
    color: Colors.primary50,
    fontWeight: 'bold'
  },
  dateText: {
    color: Colors.primary50
  },
  amountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary50,
    borderRadius: 6
  },
  amountText: {
    color: Colors.primary500,
    fontWeight: 'bold'
  }
});
