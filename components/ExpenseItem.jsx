import { Pressable, Text, View, StyleSheet } from 'react-native';

export const ExpensesItem = ({ data }) => {
  const { description, amount, date } = data;

  //Should be able to click on these to edit and delete
  return (
    <Pressable>
      <View style={styles.container}>
        <View>
          <Text>{description}</Text>
          <Text>Date</Text>
        </View>
        <View>
          <Text>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
