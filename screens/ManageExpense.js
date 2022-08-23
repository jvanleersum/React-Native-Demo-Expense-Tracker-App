import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import Colors from "../constants/colors";

const ManageExpense = ({ route, navigation }) => {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add New Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {}

  return (
    <View style={styles.container}>
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
  deleteContainer: {
    margin: 16,
    padding: 8,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.primary800
  }
});
