import axios from "axios";

export const storeExpense = (expenseData) => {
  axios.post(
    "https://react-native-course-ae6ad-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
    expenseData
  );
};

export const fetchExpenses = () => {
  const expenses = axios.get("https://react-native-course-ae6ad-default-rtdb.europe-west1.firebasedatabase.app/expenses.json")
}
