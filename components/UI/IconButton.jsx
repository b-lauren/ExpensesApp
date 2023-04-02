import { Text, View, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const IconButton = ({ onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <AntDesign name="plussquare" size={24} color="white" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    margin: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
