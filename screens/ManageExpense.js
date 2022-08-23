import { useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import Colors from "../constants/colors";
import ExpensesContext from "../store/expenses-context";

const ManageExpense = ({ route, navigation }) => {
  const expCtx = useContext(ExpensesContext);
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add New Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expCtx.removeExpense(expenseId)
    navigation.goBack();
  }

  const cancelHandler = () => {
    navigation.goBack();
  }

  const confirmHandler = () => {
    if (isEditing) {
      expCtx.editExpense(expenseId, {title: "Changed Title", amount: 12.99, date: new Date()});
    } else {
      expCtx.addExpense({title: "Dummy", amount: 23.12, date: new Date()})
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button mode="flat" style={styles.button} onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
      <View style={styles.deleteContainer}>
      {isEditing && <IconButton icon="trash" size={36} color={Colors.error500} onPress={deleteExpenseHandler}/>}
      </View>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center"
  },
  button: {
    minWidth: 120, 
    marginHorizontal: 8
  },
  deleteContainer: {
    margin: 16,
    padding: 8,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.primary800
  }
});
