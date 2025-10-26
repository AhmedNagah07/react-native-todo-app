import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity, Platform } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import CompletedTasks from "../CompletedTasks";
import StackNavigator from "./StackNavigator";
import { PATHS } from "./paths";
const { Navigator, Screen } = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: Platform.OS === 'android',
          headerStyle: { backgroundColor: "#f17049ff" },
          headerTitleStyle: {
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
          },
          tabBarStyle: {
            backgroundColor: "#f17049ff",
            borderTopColor: "transparent",
            position: "relative",
            bottom: 30,
            width: "90%",
            marginHorizontal: "5%",
            borderRadius: 20,
          },
          tabBarLabelStyle: {
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          },
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                flex: 1,
                marginTop: 30,
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
            />
          ),
        }}
      >
        <Screen
          name={PATHS.STACK}
          component={StackNavigator}
          options={{
            headerTitle: "Todo App",
            tabBarIcon: ({ focused }) => (
              <AntDesign name="home" size={24} color="white" />
            ),
          }}
        />
        <Screen
          name={PATHS.COMPLETED}
          component={CompletedTasks}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5 name="check-double" size={24} color="white" />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
