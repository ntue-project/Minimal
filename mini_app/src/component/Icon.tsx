import React from "react";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Pressable} from "react-native";
import {IButton} from "../type_definition/IButton";

export const EyeIcon: React.FC = () => <Feather name="eye" size={18} color="#bbb"/>;
export const EyeOffIcon: React.FC = () => <Feather name="eye-off" size={18} color="#bbb"/>;

export const GoogleIconButton: React.FC<IButton> = ({onPress}) => {

    return (
        <Pressable style={{
            borderRadius: 100,
            backgroundColor: "#ff5454",
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center"
        }}
                   onPress={onPress}>
            <FontAwesome5 name="google" size={17} color="#fff"/>
        </Pressable>
    )

}

export const FacebookIconButton: React.FC<IButton> = ({onPress}) => {

    return (
        <Pressable style={{
            borderRadius: 100,
            backgroundColor: "#5c5b8c",
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center"
        }}
                   onPress={onPress}>
            <FontAwesome5 name="facebook-f" size={17} color="#fff"/>
        </Pressable>
    )

}

export const AppleIconButton: React.FC<IButton> = ({onPress}) => {

    return (
        <Pressable style={{

            borderRadius: 100,
            backgroundColor: "#000",
            height: 40,
            width: 40,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 2
        }}
                   onPress={onPress}>
            <FontAwesome5 name="apple" size={19} color="#fff"/>
        </Pressable>
    )

}