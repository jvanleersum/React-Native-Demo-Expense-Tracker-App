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
          multiline: true,
          onChangeText: changeTitleHandler,
        }}
      />
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: changeAmountHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: changeDateHandler,
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({});
