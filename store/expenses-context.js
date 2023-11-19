import { createContext, useReducer } from 'react';

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

//Reducer function which needs to return a new state value or the existing state
const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'SET':
      return action.payload;
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
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  const addExpense = (expenseData) => {
    //Forward the incoming expense data to our reducer function by dispatching an action
    dispatch({ type: 'ADD', payload: expenseData });
  };

  const setExpenses = (expenses) => {
    dispatch({ type: 'SET', payload: expenses });
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
    setExpenses: setExpenses,
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
