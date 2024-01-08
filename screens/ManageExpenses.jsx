import { useLayoutEffect, useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expenses-context';
import { ExpenseForm } from '../components/ManageExpense/ExpenseForm';
import { storeExpense, updateExpense, deleteExpense } from '../util/http';
import { LoadingOverlay } from '../components/UI/LoadingOverlay';

export const ManageExpenses = ({ route, navigation }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const editingExpense = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editingExpense ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, editingExpense]);

  const deleteExpense = async () => {
    setIsUpdating(true);
    await deleteExpense(editedExpenseId);
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = async (expenseData) => {
    setIsUpdating(true);
    if (editingExpense) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
      await updateExpense(editedExpenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      expensesCtx.addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  };

  if (isUpdating) {
    return <LoadingOverlay />;
  }

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
