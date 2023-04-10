import { Text, View } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';

export const AllExpenses = () => {
  return (
    <View>
      <ExpensesOutput expensesPeriod="Total" />
    </View>
  );
};
