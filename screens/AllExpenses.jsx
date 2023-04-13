import { useContext } from 'react';
import { Text, View } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

export const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <View>
      <ExpensesOutput
        expenses={expensesCtx.expenses}
        expensesPeriod="Total"
        fallbackText="No expenses found"
      />
    </View>
  );
};
