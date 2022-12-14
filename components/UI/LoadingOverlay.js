import { View, StyleSheet, ActivityIndicator } from "react-native";
import Colors from "../../constants/colors";

const LoadingOverlay = () => {
  return <View style={styles.container}>
    <ActivityIndicator size='large' color={Colors.primary800}/>
  </View>
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
})