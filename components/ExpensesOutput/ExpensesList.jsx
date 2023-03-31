import { Text, View, FlatList } from 'react-native';
import { ExpensesItem } from '../ExpenseItem';

export const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <ExpensesItem data={itemData.item} />}
      />
    </View>
  );
};
