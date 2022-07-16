import React, {PureComponent, ReactChildren, ReactElement} from "react";
import {KeyboardAvoidingView, View} from "react-native";
import {IBaseLayout, IStackLayout} from "../../type_definition/ILayout";
import {SafeAreaView} from "react-native-safe-area-context";

/**
 * Base 為排版元件，使用 {@link View} 作為基礎，作為頁面 Root。
 *
 * 型別：{@link IBaseLayout}
 *
 * `jCenter` 或 aCenter 來直接進行物件置中
 * `justify` 及 `align` 來自定義 flexbox
 *
 */

export const BaseLayout: React.FC<IBaseLayout> = ({children, ...props}) => {
    return (
        //@ts-ignore
        <SafeAreaView
            edges={["top", "left", "right"]}
            style={{
            flex: 1,
            backgroundColor: "white"
        }}>
            {/*@ts-ignore*/}
            <KeyboardAvoidingView style={{
                flex: 1,
                justifyContent: props.center ? "center" : props.jCenter ? "center" : props.justify,
                alignItems: props.center ? "center" : props.aCenter ? "center" : props.align,

                paddingHorizontal: props.px? props.px : undefined,
                paddingVertical: props.py? props.py : undefined,

                marginHorizontal: props.mx? props.mx : undefined,
                marginVertical: props.my? props.my : undefined,
                ...props
            }}>
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

/**
 * Stack 為排版元件，使用 {@link View} 作為基礎，提供水平排版使用。
 *
 * 型別：{@link IStackLayout}
 *
 * `jCenter` 或 aCenter 來直接進行物件置中
 * `justify` 及 `align` 來自定義 flexbox
 *
 */

export const HStack: React.FC<IStackLayout> = ({children, ...props}) => {
    return (
        //@ts-ignore
        <View style={{
            flexDirection: "row",
            justifyContent: props.center ? "center" : props.jCenter ? "center" : props.justify,
            alignItems: props.center ? "center" : props.aCenter ? "center" : props.align,

            paddingHorizontal: props.px,
            paddingVertical: props.py,

            marginHorizontal: props.mx? props.mx : undefined,
            marginVertical: props.my? props.my : undefined,
            ...props
        }}>
            {children}
        </View>
    )
}

/**
 * Stack 排版元件，使用 {@link View} 作為基礎，提供垂直排版使用。
 *
 * 型別：{@link IStackLayout}
 *
 * `jCenter` 或 aCenter 來直接進行物件置中
 * `justify` 及 `align` 來自定義 flexbox
 *
 */

export const VStack: React.FC<IStackLayout> = ({children, ...props}) => {
    return (
        //@ts-ignore
        <View style={{
            flexDirection: "column",
            justifyContent: props.center ? "center" : props.jCenter ? "center" : props.justify,
            alignItems: props.center ? "center" : props.aCenter ? "center" : props.align,

            paddingHorizontal: props.px,
            paddingVertical: props.py,

            marginHorizontal: props.mx? props.mx : undefined,
            marginVertical: props.my? props.my : undefined,

            ...props
        }}>
            {children}
        </View>
    )
}

/**
 * Center 排版元件，使用 {@link View} 作為基礎，提供置中排版使用。
 *
 * 型別：{@link ICenterLayout}
 *
 * `jCenter` 或 aCenter 來直接進行物件置中
 * `justify` 及 `align` 來自定義 flexbox
 *
 */

export const Center: React.FC<IStackLayout> = ({children, ...props}) => {
    return (
        //@ts-ignore
        <View style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",

            paddingHorizontal: props.px,
            paddingVertical: props.py,

            marginHorizontal: props.mx? props.mx : undefined,
            marginVertical: props.my? props.my : undefined,
            ...props
        }}>
            {children}
        </View>
    )

}