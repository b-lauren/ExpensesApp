import { useLayoutEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { GlobalStyles } from '../constants/styles';
import { Button } from '../components/UI/Button';
import { ExpensesContext } from '../store/expenses-context';
import { ExpenseForm } from '../components/ManageExpense/ExpenseForm';

export const ManageExpenses = ({ route, navigation }) => {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const editingExpense = !!editedExpenseId;

  // const selectedExpense = expensesCtx.expenses.find((expense) => {
  //   expense.id === editedExpenseId;
  // });

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editingExpense ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, editingExpense]);

  const deleteExpense = () => {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = (expenseData) => {
    if (editingExpense) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <ExpenseForm
        submitButtonLabel={editingExpense ? 'Update' : 'Add'}
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />
      {editingExpense && (
        <View style={styles.deleteContainer}>
          <FontAwesome
            name="trash-o"
            size={28}
            color="black"
            onPress={deleteExpense}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.primary100,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.tertiary100,
    alignItems: 'center',
  },
});
