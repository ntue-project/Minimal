import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {HStack} from "./src/component/base_component/Layout";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from "./src/screen/SplashScreen";
import LinearGradient from "react-native-linear-gradient";
import LoginScreen from "./src/screen/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()



const App = () => {
  return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Content/>
        </NavigationContainer>
      </SafeAreaProvider>
  )
}

const Content: React.FC = () => {
  return (
      <Stack.Navigator initialRouteName="LoginScreen"
                       screenOptions={{
                         headerShown: false
                       }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      </Stack.Navigator>
  )
}

export default App