import { useEffect, useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

import IconButton from "../components/UI/IconButton";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import Colors from "../constants/colors";
import ExpensesContext from "../store/expenses-context";
import { deleteExpense, storeExpense, updateExpense } from "../utils/http";

const ManageExpense = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const expCtx = useContext(ExpensesContext);
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  const selectedExpense = expCtx.expenses.find(
    (expense) => expense.id === expenseId
  );

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add New Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = async () => {
    expCtx.removeExpense(expenseId);
    setIsLoading(true);
    await deleteExpense(expenseId);
    setIsLoading(false);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseData) => {
    if (isEditing) {
      expCtx.editExpense(expenseId, expenseData);
      setIsLoading(true);
      await updateExpense(expenseId, expenseData);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      const id = await storeExpense(expenseData);
      setIsLoading(false);
      expCtx.addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  };

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <View>
        <ExpenseForm
          onCancel={cancelHandler}
          onSubmit={confirmHandler}
          submitButtonLabel={isEditing ? "Update" : "Add"}
          initialExpense={selectedExpense}
        />
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
