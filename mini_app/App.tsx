import React from "react";
import {StatusBar, StyleSheet, Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {HStack} from "./src/component/primitive/Layout";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack";
import SplashScreen from "./src/screen/SplashScreen";
import LinearGradient from "react-native-linear-gradient";
import LoginScreen from './src/screen/LoginScreen';
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {Provider} from "react-redux";
import {store} from "./src/global_state/store";
import InterestScreen from "./src/screen/InterestScreen";
import IntroductionScreen from "./src/screen/IntroductionScreen";
import MainScreen from "./src/screen/MainScreen";
import ProductDetailScreen from "./src/screen/ProductDetailScreen";
import WishlistScreen from "./src/screen/WishlistScreen";
import NotificationScreen from "./src/screen/NotificationScreen";
import AccountScreen from "./src/screen/AccountScreen";
import {TabAccountIcon, TabHomeIcon, TabNotificationIcon, TabWishlistIcon} from "./src/component/TabIcon";

export type RootParamList = {

    Splash: undefined;
    LoginScreen: undefined;
    IntroductionScreen: undefined;
    InterestScreen: undefined;
    ProductDetailScreen : undefined

    TabContent: { screen: string }

    首頁: undefined;
    收藏: undefined
    通知: undefined
    帳號: undefined
};

const Stack = createNativeStackNavigator<RootParamList>();
const Tab = createBottomTabNavigator<RootParamList>()

const App = () => {
    return (

        <Provider store={store}>

            <StatusBar barStyle={"dark-content"}/>

            <SafeAreaProvider>
                <NavigationContainer>
                    <NativeStackContent/>
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    )
}

const NativeStackContent: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="TabContent"
                         screenOptions={{
                             headerShown: false
                         }}
        >
            {/*STACK NAVIGATOR CONTENT (Intro)*/}
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="IntroductionScreen" component={IntroductionScreen}/>
            <Stack.Screen name="InterestScreen" component={InterestScreen}/>

            {/*STACK NAVIGATOR CONTENT (Entered)*/}
            <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen}/>

            {/*BOTTOM TAB CONTENT*/}
            <Stack.Screen name="TabContent" component={TabContent}/>

        </Stack.Navigator>
    )
}

const TabContent: React.FC = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>()

    return (
        <Tab.Navigator initialRouteName="首頁"
                       screenOptions={({route}) => ({
                           headerShown: false,
                           tabBarShowLabel: false,
                           tabBarActiveTintColor: "#FF5454",
                           tabBarIcon: ({focused, color, size}) => {
                               if (route.name === "首頁") {
                                   return (
                                       <TabHomeIcon
                                           props={{
                                               focused: focused
                                           }}
                                           onPress={() => {
                                               navigation.navigate("首頁")
                                           }}
                                       />
                                   );
                               }
                               if (route.name === '收藏') {
                                   return (
                                       <TabWishlistIcon
                                           props={{
                                               focused: focused
                                           }}
                                           onPress={() => {
                                               navigation.navigate("收藏")
                                           }}
                                       />
                                   );
                               }
                               if (route.name === '通知') {
                                   return (
                                       <TabNotificationIcon
                                           props={{
                                               focused: focused
                                           }}
                                           onPress={() => {
                                               navigation.navigate("通知")
                                           }}
                                       />
                                   );
                               }
                               if (route.name === '帳號') {
                                   return (
                                       <TabAccountIcon
                                           props={{
                                               focused: focused
                                           }}
                                           onPress={() => {
                                               navigation.navigate("帳號")
                                           }}
                                       />
                                   );
                               }
                           },
                       })}

        >

            <Tab.Screen name="首頁" component={MainScreen} />
            <Tab.Screen name="收藏" component={WishlistScreen}/>
            <Tab.Screen name="通知" component={NotificationScreen}/>
            <Tab.Screen name="帳號" component={AccountScreen}/>
        </Tab.Navigator>
    )
}

export default App
