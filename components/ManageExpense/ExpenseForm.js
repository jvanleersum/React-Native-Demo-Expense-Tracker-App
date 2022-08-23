import { View, StyleSheet } from "react-native";
import { useState } from "react";
import Input from "./Input";

const ExpenseForm = () => {
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  const [enteredTitle, setEnteredTitle] = useState('')

  const changeTitleHandler = (enteredTitle) => {
    setEnteredTitle(enteredTitle);
  };

  const changeAmountHandler = (enteredAmount) => {
    setEnteredAmount(enteredAmount);
  };

  const changeDateHandler = (enteredDate) => {
    setEnteredDate(enteredDate);
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputsContainer}>
        <Input
          label="Amount"
          style={styles.inputFlex}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: changeAmountHandler,
            value: enteredAmount
          }}
        />
        <Input
          label="Date"
          style={styles.inputFlex}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: changeDateHandler,
            value: enteredDate
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: changeTitleHandler,
          value: enteredTitle
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 16,
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  inputFlex: {
    flex:1
  }
});
