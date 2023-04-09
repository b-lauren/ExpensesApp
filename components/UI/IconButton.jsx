import { View, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const IconButton = ({ onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <AntDesign name="plussquare" size={22} color="white" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  pressed: {
    opacity: 0.75,
  },
});
