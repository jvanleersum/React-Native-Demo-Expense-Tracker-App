import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/colors";
import { getFormattedDate } from "../../utils/date";

const ExpensesListTile = ({ expense }) => {
  const navigation = useNavigation();

  const manageExpenseHandler = () => {
    navigation.navigate("ManageExpense", { expenseId: expense.id });
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={manageExpenseHandler}
        style={({ pressed }) => 
          pressed && styles.pressed
        }
      >
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.titleText}>{expense.title}</Text>
            <Text style={styles.dateText}>
              {getFormattedDate(expense.date)}
            </Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amountText}>€{expense.amount.toFixed(2)}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ExpensesListTile;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  innerContainer: {
    backgroundColor: Colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderRadius: 8,
    marginVertical: 6,
  },
  titleText: {
    color: Colors.primary50,
    fontWeight: "bold",
  },
  dateText: {
    color: Colors.primary50,
  },
  amountContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary50,
    borderRadius: 6,
    padding: 6,
    minWidth: 80,
  },
  amountText: {
    color: Colors.primary500,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.5,
  },
});
