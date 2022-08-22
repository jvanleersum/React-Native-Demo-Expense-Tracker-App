import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/colors";

const AddExpenseButton = () => {
  const navigation = useNavigation();

  const manageExpenseHandler = () => {
    navigation.navigate("ManageExpense")
  }

  return (
    <Pressable >
        <Ionicons name="add" size={24} color={Colors.primary50} onPress={manageExpenseHandler}/>
    </Pressable>
  );
};

export default AddExpenseButton;
