import { Text, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.summaryText}>In {periodName}</Text>
        <Text style={styles.summaryText}>
          you spent <Text style={styles.sum}>£{expensesSum.toFixed(2)}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: GlobalStyles.black,
    justifyContent: 'center',
    borderRadius: 6,
    marginBottom: 12,
  },
  summaryText: {
    fontSize: 18,
    color: 'white',
  },
  sum: {
    fontWeight: 'bold',
  },
});
