import { Pressable, Text, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { getFormattedDate } from '../util/date';
import { useNavigation } from '@react-navigation/native';

export const ExpensesItem = ({ id, description, amount, date }) => {
  //Should be able to click on these to edit and delete
  const navigation = useNavigation();

  const expensePress = () => {
    console.log('expense pressed');
    navigation.navigate('ManageExpenses', {
      expenseId: id,
    });
  };
  return (
    <Pressable
      onPress={expensePress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.description}>{description}</Text>
          <Text>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.grey100,
    borderRadius: 8,
    elevation: 2,
    shadowColor: GlobalStyles.grey300,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  text: {},
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  priceContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
    backgroundColor: GlobalStyles.primary100,
  },
  amount: {
    color: 'white',
    fontWeight: 'bold',
  },
});
