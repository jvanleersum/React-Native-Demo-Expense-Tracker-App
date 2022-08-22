import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/colors";

const AddExpenseButton = () => {
  const navigation = useNavigation();

  const manageExpenseHandler = () => {
    navigation.navigate("ManageExpense");
  };

  return (
    <Pressable
      onPress={manageExpenseHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name="add" size={24} color={Colors.primary50} />
    </Pressable>
  );
};

export default AddExpenseButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
