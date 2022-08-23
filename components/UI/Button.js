import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Button = ({children, mode, style, onPress}) => {
  return <View style={style}>
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <View style={[styles.button, mode === "flat" && styles.flat ]}>
        <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
      </View>
    </Pressable>
  </View>
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    padding: 8,
    backgroundColor: Colors.primary500,
  },
  flat: {
    backgroundColor: 'transparent'
  },
  buttonText: {
    color: 'white',
    textAlign: "center"
  },
  flatText: {
    color: Colors.primary400
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.primary100,
    borderRadius: 6,
  }
})