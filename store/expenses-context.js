import { createContext, useState } from "react";

const ExpensesContext = createContext({
  expenses: [],
  addExpense: () => {},
  removeExpense: (id) => {},
  editExpense: (id, title, amount, date) => {},
});

export default ExpensesContext;

export const ExpensesContextProvider = ({children}) => {
  const [expenses, setExpenses] = useState([]);
  
  const addExpenseHandler = (expense) => {
    setExpenses(prevExp => [expense, ...prevExp])
  }

  const removeExpenseHandler = (id) => {
    setExpenses(prevExp => prevExp.filter(exp => exp.id !== id))
  }

  const editExpenseHandler = (id, title, amount, date) => {
    const expenseIndex = expenses.indexOf(exp => exp.id === id)
    setExpenses(prevExp => {
      prevExp[expenseIndex].title = title
      prevExp[expenseIndex].amount = amount
      prevExp[expenseIndex].date = date
      return prevExp })
  }

  return <ExpensesContext.Provider value={{
    expenses: [],
    addExpense: addExpenseHandler,
    removeExpense: removeExpenseHandler,
    editExpense: editExpenseHandler,
  }}>
    {children}
  </ExpensesContext.Provider>
}