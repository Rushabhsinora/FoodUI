import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import AppLoading from "expo-app-loading";
import colors from "./assets/colors/colors";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./components/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    bold: require("./assets/fonts/Montserrat-Bold.ttf"),
    medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    semi: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
