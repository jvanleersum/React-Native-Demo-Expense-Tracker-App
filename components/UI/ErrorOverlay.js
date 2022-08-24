import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";
import Button from "./Button";

const ErrorOverlay = ({message, onConfirm}) => {
  return <View style={styles.container}>
    <Text style={[styles.text, styles.mainText]}>An error occured!</Text>
    <Text style={styles.text}>{message}</Text>
    <Button onPress={onConfirm}>Okay</Button>
  </View>
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center', 
    marginBottom: 8,
    color: Colors.primary200,
  },
  mainText:{
    color: Colors.primary500,
    fontWeight: 'bold',
  },
})