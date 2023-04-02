import { Pressable, Text, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { getFormattedDate } from '../util/date';

export const ExpensesItem = ({ description, amount, date }) => {
  //Should be able to click on these to edit and delete
  return (
    <Pressable>
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
  },
  amount: {
    color: GlobalStyles.primary200,
    fontWeight: 'bold',
  },
});
