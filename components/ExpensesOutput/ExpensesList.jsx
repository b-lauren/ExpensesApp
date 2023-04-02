import { Text, View, FlatList } from 'react-native';
import { ExpensesItem } from '../ExpenseItem';

export const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <ExpensesItem {...itemData.item} />}
      />
    </View>
  );
};
