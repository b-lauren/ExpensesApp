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
  {
    id: '10',
    description: 'Berenjak',
    amount: 106.5,
    date: new Date('2023-04-10'),
  },
  {
    id: '11',
    description: 'Fabrique',
    amount: 18.99,
    date: new Date('2023-04-12'),
  },
  {
    id: '12',
    description: 'Coffee',
    amount: 4.99,
    date: new Date('2023-04-12'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

//Reducer function which needs to return a new state value or the existing state
const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      //Find index of expense to update by ID
      const updateExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      //Get expense itself by using the ID
      const updatableExpense = state[updateExpenseIndex];
      //Update in inmutable way
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      //Get the overall array that should be updated
      const updatedExpenses = [...state];
      //Override existing expense with new expense
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
    //Forward the incoming expense data to our reducer function by dispatching an action
    dispatch({ type: 'ADD', payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  };

  //Bundle all of our data and functions together to expose them to the interested components through our Provider Component
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
