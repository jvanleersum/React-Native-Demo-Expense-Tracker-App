import { View, StyleSheet } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  const changeTitleHandler = () => {};

  const changeAmountHandler = () => {};

  const changeDateHandler = () => {};

  return (
    <View>
      <Input
        label="Title"
        textInputConfig={{
          placeholder: "New Title",
          keyboardType: "default",
          onChangeText: changeTitleHandler,
        }}
      />
      <Input
        label="Amount"
        textInputConfig={{
          placeholder: "New Amount",
          keyboardType: "decimal-pad",
          onChangeText: changeAmountHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "New Date",
          keyboardType: "default",
          onChangeText: changeDateHandler,
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({});
