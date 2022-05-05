import React from "react";
import {ILayout, IStackLayout} from "../../type_definition/ILayout";
import {Pressable, View} from "react-native";
import {IPress} from "../../type_definition/IPress";

export const Press: React.FC<IPress> = ({children,onPress, onLongPress, ...props}) => {
    return (
        //@ts-ignore
        <Pressable style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: props.px? props.px : 0,
            paddingVertical: props.py? props.py : 0,
            marginHorizontal: props.mx? props.mx : 0,
            marginVertical: props.my? props.my : 0,
            ...props
        }}
                   onPress={onPress}
                   onLongPress={onLongPress}
        >
            {children}
        </Pressable>
    )
}

