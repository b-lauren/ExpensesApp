import { Text, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export const ExpensesSummary = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.summaryText}>In the Last 7 Days</Text>
        <Text style={styles.summaryText}>
          you spent <Text style={styles.sum}> £5.99</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: GlobalStyles.black,
    justifyContent: 'center',
    borderRadius: 6,
    marginBottom: 12,
  },
  summaryText: {
    fontSize: 18,
    color: 'white',
  },
  sum: {
    fontWeight: 'bold',
  },
});
