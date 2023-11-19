import axios from 'axios';

const BACKEND_URL =
  'https://udemy-react-native-ad88d-default-rtdb.firebaseio.com';

export const storeExpense = async (expenseData) => {
  const response = await axios.post(
    BACKEND_URL + '/expenses.json',
    expenseData
  );
  const id = response.data.name;
  return id;
};

export const fetchExpenses = async () => {
  const response = await axios.get(BACKEND_URL + '/expenses.json');

  console.log(response.data);

  //transform data into an array of objects
  const expenses = [];

  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObject);
  }
  return expenses;
};

//not async so we can deal with the loading state
export const updateExpense = (id, expenseData) => {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
};

export const deleteExpense = (id) => {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
};
