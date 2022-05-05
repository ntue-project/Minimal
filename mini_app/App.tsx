import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {HStack} from "./src/component/primitive/Layout";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SplashScreen from "./src/screen/SplashScreen";
import LinearGradient from "react-native-linear-gradient";
import LoginScreen from './src/screen/LoginScreen';
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import {store} from "./src/global_state/store";
import InterestScreen from "./src/screen/InterestScreen";
import IntroductionScreen from "./src/screen/IntroductionScreen";
import MainScreen from "./src/screen/MainScreen";

export type RootStackParamList = {
    Splash: undefined;
    LoginScreen: undefined;
    IntroductionScreen: undefined;
    InterestScreen: undefined;
    MainScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator()

const App = () => {
    return (
        <Provider store={store}>

            <SafeAreaProvider>
                <NavigationContainer>
                    <Content/>
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    )
}

const Content: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="InterestScreen"
                         screenOptions={{
                             headerShown: false
                         }}
        >
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="IntroductionScreen" component={IntroductionScreen}/>
            <Stack.Screen name="InterestScreen" component={InterestScreen}/>
            <Stack.Screen name="MainScreen" component={MainScreen}/>
        </Stack.Navigator>
    )
}

export default App