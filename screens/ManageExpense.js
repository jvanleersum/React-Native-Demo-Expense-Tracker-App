import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/UI/Button";
import IconButton from "../components/UI/IconButton";
import Colors from "../constants/colors";

const ManageExpense = ({ route, navigation }) => {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add New Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    navigation.goBack();
  }

  const cancelHandler = () => {
    navigation.goBack();
  }

  const confirmHandler = () => {
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
