import { View, StyleSheet} from "react-native";
import { useState } from "react";

import Input from "./Input";
import Button from "../../components/UI/Button";
import { getFormattedDate } from "../../utils/date";

const ExpenseForm = ({ onCancel, onSubmit, submitButtonLabel, initialExpense }) => {
  const [inputValues, setInputValues] = useState({
    amount: initialExpense ? initialExpense.amount.toFixed(2) : "",
    title: initialExpense ? initialExpense.title : "",
    date: initialExpense ? getFormattedDate(initialExpense.date) : "",
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValues((prevState) => {
      return { ...prevState, [inputIdentifier]: enteredValue };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      title: inputValues.title,
      amount: parseInt(inputValues.amount),
      date: new Date(inputValues.date), 
    }
    onSubmit(expenseData)
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputsContainer}>
        <Input
          label="Amount"
          style={styles.inputFlex}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(null, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          label="Date"
          style={styles.inputFlex}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(null, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(null, "title"),
          value: inputValues.title,
        }}
      />
      <View style={styles.buttonsContainer}>
        <Button mode="flat" style={styles.button} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  formContainer: {
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputFlex: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    marginVertical: 8
  },
  button: {
    minWidth: 120, 
    marginHorizontal: 8
  },
});
