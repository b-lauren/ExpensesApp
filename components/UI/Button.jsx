import { Text, View, Pressable, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.tertiary100,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    textAlign: 'center',
  },
  flatText: {
    color: GlobalStyles.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.primary100,
  },
});
