import { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

export const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
    }
    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });
  return (
    <View>
      <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod="the last 7 days"
        fallbackText="No expenses from the last 7 days"
      />
    </View>
  );
};
