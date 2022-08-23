import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";

import Input from "./Input";
import Button from "../../components/UI/Button";
import { getFormattedDate } from "../../utils/date";

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  initialExpense,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: initialExpense ? initialExpense.amount.toFixed(2) : "",
      isValid: true,
    },
    title: {
      value: initialExpense ? initialExpense.title : "",
      isValid: true,
    },
    date: {
      value: initialExpense ? getFormattedDate(initialExpense.date) : "",
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      title: inputs.title.value,
      amount: parseInt(inputs.amount.value),
      date: new Date(inputs.date.value),
    };
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString !== "Invalid Date";
    const titleIsValid = expenseData.title.trim().length !== 0;

    if (!amountIsValid || !dateIsValid || !titleIsValid) {
      setInputs((prevData) => {
        return {
          amount: { value: prevData.amount.value, isValid: amountIsValid },
          date: { value: prevData.date.value, isValid: dateIsValid },
          title: { value: prevData.title.value, isValid: titleIsValid },
        };
      });
      return;
    }
    onSubmit(expenseData);
  };

  const formIsValid = inputs.amount.isValid && inputs.date.isValid && inputs.title.isValid;

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputsContainer}>
        <Input
          label="Amount"
          style={styles.inputFlex}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(null, "amount"),
            value: inputs.amount.value,
          }}
        />
        <Input
          label="Date"
          style={styles.inputFlex}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(null, "date"),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(null, "title"),
          value: inputs.title.value,
        }}
      />
      {!formIsValid && <Text>One of more fields is invalid</Text>}
      <View style={styles.buttonsContainer}>
        <Button mode="flat" style={styles.button} onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  formContainer: {},
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputFlex: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
