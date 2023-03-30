import { Text, View } from 'react-native';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

const DUMMY_EXPENSES = [
  {
    id: '1',
    description: 'shoes',
    amount: 78.99,
    date: new Date('2022-12-19'),
  },
  {
    id: '2',
    description: 'toiletries',
    amount: 18.99,
    date: new Date('2023-01-01'),
  },
  {
    id: '3',
    description: 'book',
    amount: 8.99,
    date: new Date('2023-01-05'),
  },
];

export const ExpensesOutput = ({ expenses }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};
