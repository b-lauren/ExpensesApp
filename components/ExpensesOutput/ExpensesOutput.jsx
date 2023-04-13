import { Text, View, StyleSheet } from 'react-native';
import { ExpensesList } from './ExpensesList';
import { ExpensesSummary } from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';

export const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText }) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.outputContainer}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  outputContainer: {
    height: '100%',
    padding: 30,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 48,
    color: GlobalStyles.grey300,
  },
});
