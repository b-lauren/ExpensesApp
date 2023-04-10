import { Text, View } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';

export const RecentExpenses = () => {
  return (
    <View>
      <ExpensesOutput expensesPeriod="the last 7 days" />
    </View>
  );
};
