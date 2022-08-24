import axios from "axios";

const BACKEND_URL = "https://react-native-course-ae6ad-default-rtdb.europe-west1.firebasedatabase.app"

export const storeExpense = (expenseData) => {
  axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
};

export const fetchExpenses = async () => {
  const response = await axios.get(BACKEND_URL + "/expenses.json")
  const expenses = []
  for ( const key in response.data ) {
    const expenseObj = {
      id: key,
      title: response.data[key].title,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
    }
    expenses.push(expenseObj);
  }
  return expenses;
}
