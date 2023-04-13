import { TextInput, View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export const Input = ({ label, textInputConfig, style }) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={(styles.inputContainer, style)}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    color: GlobalStyles.primary200,
  },
  input: {
    borderColor: GlobalStyles.tertiary100,
    borderWidth: 2,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    margin: 4,
  },
  inputMultiline: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
});
