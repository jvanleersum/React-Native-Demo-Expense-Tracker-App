import { createContext, useState } from "react";

const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({title, amount, date}) => {},
  setExpenses: (expenses) => {},
  removeExpense: (id) => {},
  editExpense: (id, {title, amount, date}) => {},
});

export default ExpensesContext;

export const ExpensesContextProvider = ({children}) => {
  const [expenses, setExpenses] = useState([]);
  
  const addExpenseHandler = ({title, amount, date}) => {
    const id = new Date().toISOString() + Math.random().toString();
    const newExpense = {id, title, amount, date}

    setExpenses(prevExp => [newExpense, ...prevExp])
  };

  const setExpensesHandler = (expenses) => {
    setExpenses(expenses);
  };

  const removeExpenseHandler = (id) => {
    setExpenses(prevExp => prevExp.filter(exp => exp.id !== id))
  };

  const editExpenseHandler = (id, expenseData) => {
    const expenseIndex = expenses.findIndex(exp => exp.id === id)
    const updatableExpense = expenses[expenseIndex]
    setExpenses(prevExp => {
      const updatedExpense = {...updatableExpense, ...expenseData}
      const newExpenses = [...prevExp]
      newExpenses[expenseIndex] = updatedExpense
      return newExpenses
    })
  };

  return <ExpensesContext.Provider value={{
    expenses: expenses,
    addExpense: addExpenseHandler,
    setExpenses: setExpensesHandler,
    removeExpense: removeExpenseHandler,
    editExpense: editExpenseHandler,
  }}>
    {children}
  </ExpensesContext.Provider>
}