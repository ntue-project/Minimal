import React from "react";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Pressable} from "react-native";

export const EyeIcon: React.FC = () => <Feather name="eye" size={18} color="#bbb"/>;
export const EyeOffIcon: React.FC = () => <Feather name="eye-off" size={18} color="#bbb"/>;

export const GoogleIconButton: React.FC = () => {

    return (
        <Pressable style={{
            borderRadius: 100,
            backgroundColor: "#ff5454",
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <FontAwesome5 name="google" size={17} color="#fff"/>
        </Pressable>
    )

}

export const FacebookIconButton: React.FC = () => {

    return (
        <Pressable style={{
            borderRadius: 100,
            backgroundColor: "#5c5b8c",
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <FontAwesome5 name="facebook-f" size={17} color="#fff"/>
        </Pressable>
    )

}

export const AppleIconButton: React.FC = () => {

    return (
        <Pressable style={{

            borderRadius: 100,
            backgroundColor: "#000",
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 2
        }}>
            <FontAwesome5 name="apple" size={19} color="#fff"/>
        </Pressable>
    )

}