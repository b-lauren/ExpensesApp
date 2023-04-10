import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: '1',
    description: 'Shoes',
    amount: 78.99,
    date: new Date('2022-12-19'),
  },
  {
    id: '2',
    description: 'Toiletries',
    amount: 18.99,
    date: new Date('2023-01-01'),
  },
  {
    id: '3',
    description: 'Book',
    amount: 8.99,
    date: new Date('2023-01-05'),
  },
  {
    id: '4',
    description: 'Make up',
    amount: 78.99,
    date: new Date('2022-12-19'),
  },
  {
    id: '5',
    description: 'Clothes',
    amount: 18.99,
    date: new Date('2023-01-01'),
  },
  {
    id: '6',
    description: 'Coffee',
    amount: 8.99,
    date: new Date('2023-01-05'),
  },
  {
    id: '7',
    description: 'Tea',
    amount: 78.99,
    date: new Date('2022-12-19'),
  },
  {
    id: '8',
    description: 'Dinner',
    amount: 18.99,
    date: new Date('2023-01-01'),
  },
  {
    id: '9',
    description: 'Coffee',
    amount: 8.99,
    date: new Date('2023-01-05'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = newDate().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updateExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updateExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  //State management (context) logic
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    //Pass an action and forward the incoming expense data to the reducer function
    dispatch({ type: 'ADD', payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContextProvider value={value}>{children}</ExpensesContextProvider>
  );
};

export default ExpensesContextProvider;
