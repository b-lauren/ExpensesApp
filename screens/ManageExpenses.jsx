import { Text, View } from 'react-native';
import { useLayoutEffect } from 'react';

export const ManageExpenses = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const editingExpense = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editingExpense ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, editingExpense]);

  return (
    <View>
      <Text>Manage Expenses Page</Text>
    </View>
  );
};
