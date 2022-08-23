import { createContext, useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "New pair of shoes",
    amount: 28.89,
    date: new Date("2022-01-29"),
  },
  {
    id: "e2",
    title: "10 books",
    amount: 50.92,
    date: new Date("2022-03-29"),
  },
  {
    id: "e3",
    title: "Great new laptop",
    amount: 291.99,
    date: new Date("2022-06-29"),
  },
  {
    id: "e4",
    title: "Glass of water",
    amount: 1.59,
    date: new Date("2022-08-11"),
  },
  {
    id: "e5",
    title: "A few beers",
    amount: 7.99,
    date: new Date("2022-08-20"),
  },
  {
    id: "e6",
    title: "New pair of shoes",
    amount: 28.89,
    date: new Date("2022-01-29"),
  },
  {
    id: "e7",
    title: "10 books",
    amount: 50.92,
    date: new Date("2022-03-29"),
  },
  {
    id: "e8",
    title: "Great new laptop",
    amount: 291.99,
    date: new Date("2022-06-29"),
  },
  {
    id: "e9",
    title: "Glass of water",
    amount: 1.59,
    date: new Date("2022-08-11"),
  },
  {
    id: "e10",
    title: "A few beers",
    amount: 7.99,
    date: new Date("2022-08-20"),
  },
];


const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({title, amount, date}) => {},
  removeExpense: (id) => {},
  editExpense: (id, {title, amount, date}) => {},
});

export default ExpensesContext;

export const ExpensesContextProvider = ({children}) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = ({title, amount, date}) => {
    const id = new Date().toISOString() + Math.random().toString();
    const newExpense = {id, title, amount, date}

    setExpenses(prevExp => [newExpense, ...prevExp])
  }

  const removeExpenseHandler = (id) => {
    setExpenses(prevExp => prevExp.filter(exp => exp.id !== id))
  }

  const editExpenseHandler = (id, expenseData) => {
    const expenseIndex = expenses.findIndex(exp => exp.id === id)
    const updatableExpense = expenses[expenseIndex]
    setExpenses(prevExp => {
      const updatedExpense = {...updatableExpense, ...expenseData}
      const newExpenses = [...prevExp]
      newExpenses[expenseIndex] = updatedExpense
      return newExpenses
    })
  }

  return <ExpensesContext.Provider value={{
    expenses: expenses,
    addExpense: addExpenseHandler,
    removeExpense: removeExpenseHandler,
    editExpense: editExpenseHandler,
  }}>
    {children}
  </ExpensesContext.Provider>
}