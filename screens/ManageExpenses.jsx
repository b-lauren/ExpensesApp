import { Text, View, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { GlobalStyles } from '../constants/styles';
import { Button } from '../components/UI/Button';

export const ManageExpenses = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const editingExpense = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editingExpense ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, editingExpense]);

  const deleteExpense = () => {
    console.log('deleted expense');
    navigation.goBack();
  };

  const cancelHandler = () => {
    console.log('cancel');
    navigation.goBack();
  };

  const confirmHandler = () => {
    console.log('cancel');
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
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
    minWidth: 120,
    marginHorizontal: 8,
  },
});
