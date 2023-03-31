import { Text, View } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';

export const AllExpenses = () => {
  return (
    <View>
      {/* <Text>All Expenses Page</Text> */}
      <ExpensesOutput />
    </View>
  );
};
