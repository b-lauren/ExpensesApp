import { Text, View, StyleSheet } from 'react-native';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';

export const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.outputContainer}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
  outputContainer: {
    height: '100%',
    padding: 30,
  },
});
