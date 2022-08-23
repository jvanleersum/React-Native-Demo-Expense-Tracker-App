import { View, Text, StyleSheet, TextInput } from "react-native"
import Colors from "../../constants/colors"

const Input = ({label, textInputConfig, style, invalid}) => {
  const inputStyle = [styles.textInput]
  const labelStyle = [styles.label]

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.multilineInput);
  }

  if (invalid) {
    inputStyle.push(styles.invalidTextInput)
    labelStyle.push(styles.invalidLabel)
  }

  return <View style={[styles.inputContainer, style]}>
    <Text style={labelStyle}>{label}</Text>
    <TextInput style={inputStyle} {...textInputConfig}/>
  </View>
}

export default Input

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8
  },
  label: {
    fontSize: 12,
    color: Colors.primary400,
    marginBottom: 4
  },
  invalidLabel: {
    color: Colors.error500
  },
  textInput: {
    backgroundColor: Colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: Colors.primary700
  },
  invalidTextInput: {
    backgroundColor: Colors.error50,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top'
  }
})