import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import Colors from "./constants/colors";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import IconButton from "./components/UI/IconButton";
import ManageExpense from "./screens/ManageExpense";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const TabNavigator = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={({navigation}) => ({
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveTintColor: Colors.primary50,
        tabBarStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: Colors.primary50,
        headerStyle: { backgroundColor: Colors.primary500 },
        headerRight: ({tintColor}) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => navigation.navigate("ManageExpense")}
          />
        ),
      })}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="hourglass" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="calendar" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AllExpensesScreen"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              presentation: "modal",
              headerTintColor: Colors.primary50,
              headerStyle: { backgroundColor: Colors.primary500 },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
