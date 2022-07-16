import React, {ReactNode, useContext} from "react";
import {Text} from "react-native";
import {Platform} from "react-native";
import {IBaseLayout, ILayout} from "../../type_definition/ILayout";

const smaller = -2
const accessibilityShift = 2

export const TextStandard = {}

export interface ITextProps extends ILayout {
    type?: "nano" | "caption" | "normal" | "heading3" | "heading2" | "heading1" | "title"
    content?: string
    fontSize? : number
    bold?: boolean
}

export const VarText: React.FC<ITextProps> = ({type, content, bold, children, ...props}) => {

    let styleObj = {}

    switch (type) {
        case "nano":
            Object.assign(styleObj, Platform.OS === "ios" ? {fontSize: 12} : {fontSize: 12 + smaller + 1})
            break
        case "caption":
            Object.assign(styleObj, Platform.OS === "ios" ? {fontSize: 13} : {fontSize: 13 + smaller + 1})
            break
        case "normal":
            Object.assign(styleObj, Platform.OS === "ios" ? {fontSize: 14} : {fontSize: 14 + smaller})
            break
        case "heading3":
            Object.assign(styleObj, Platform.OS === "ios" ? {fontSize: 16} : {fontSize: 16 + smaller})
            break
        case "heading2":
            Object.assign(styleObj, Platform.OS === "ios" ? {fontSize: 20} : {fontSize: 19 + smaller - 1})
            break
        case "heading1":
            Object.assign(styleObj, Platform.OS === "ios" ? {fontSize: 26} : {fontSize: 24 + smaller - 1})
            break
        case "title":
            Object.assign(styleObj, Platform.OS === "ios" ? {fontSize: 34} : {fontSize: 32 + smaller - 1})
            break
    }


    return (
        <Text style={[styleObj,
            //@ts-ignore
            {
                paddingHorizontal: props.px,
                paddingVertical: props.py,
                fontWeight: bold ? "bold" : "normal",
                ...props}
        ]}>
            {content}
            {children}
        </Text>
    )
}
