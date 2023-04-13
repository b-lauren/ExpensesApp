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

  const confirmHandler = () => {
    if (editingExpense) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: 'Test!!',
        amount: 39.99,
        date: new Date('2023-02-22'),
      });
    } else {
      expensesCtx.addExpense({
        description: 'Test',
        amount: 19.99,
        date: new Date('2023-01-19'),
      });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <ExpenseForm />
      <View style={styles.buttonContainer}>
        <Button style={styles.buttons} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.buttons} onPress={confirmHandler}>
          {editingExpense ? 'Edit' : 'Add'}
        </Button>
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    paddingTop: 16,
    minWidth: 120,
    marginHorizontal: 8,
  },
});
