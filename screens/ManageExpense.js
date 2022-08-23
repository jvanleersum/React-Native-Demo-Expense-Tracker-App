import { useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

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
    expCtx.removeExpense(expenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = (expenseData) => {
    if (isEditing) {
      expCtx.editExpense(expenseId, expenseData);
    } else {
      expCtx.addExpense(expenseData);
    }
    navigation.goBack();

  }

  return (
    <View style={styles.container}>
      <View>
        <ExpenseForm onCancel={cancelHandler} onSubmit={confirmHandler} submitButtonLabel={isEditing ? "Update" : "Add"}/>
      </View>
      <View style={styles.deleteContainer}>
        {isEditing && (
          <IconButton
            icon="trash"
            size={36}
            color={Colors.error500}
            onPress={deleteExpenseHandler}
          />
        )}
      </View>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  deleteContainer: {
    margin: 16,
    padding: 8,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: Colors.primary800,
  },
});
