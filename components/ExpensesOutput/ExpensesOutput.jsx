import { Text, View, StyleSheet } from 'react-native';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

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

export const ExpensesOutput = ({ expenses }) => {
  return (
    <View style={styles.outputContainer}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

const styles = StyleSheet.create({
  outputContainer: {
    height: '100%',
    padding: 30,
  },
});
