import React, {ReactNode, useContext} from "react";
import {Text} from "react-native";
import {Platform} from "react-native";
import {IBaseLayout, ILayout} from "../../type_definition/ILayout";

const smaller = -2
const accessibilityShift = 2

export const TextStandard = {}

export interface ITextProps extends ILayout {

    type?: "nano" | "caption" | "normal" | "heading3" | "heading2" | "heading1" | "title"
    letterSpacing?: number
    content?: string
    fontSize? : number
    fontWeight? : string
    bold?: boolean
}

export const VarText: React.FC<ITextProps> = ({type, content, bold, children, ...props}) => {

    let styleObj = {}

    switch (type) {
        case "nano":
            Object.assign(styleObj, Platform.OS === "ios" ? {fontSize: 12} : {fontSize: 12 + smaller})
            break
        case "caption":
            Object.assign(styleObj, Platform.OS === "ios" ? {fontSize: 13} : {fontSize: 13 + smaller})
            break
        case "normal":
            Object.assign(styleObj, Platform.OS === "ios" ? {fontSize: 14} : {fontSize: 14 + smaller})
            break
        case "heading3":
            Object.assign(styleObj, Platform.OS === "ios" ? {fontSize: 16} : {fontSize: 16 + smaller})
            break
        case "heading2":
            Object.assign(styleObj, Platform.OS === "ios" ? {fontSize: 19} : {fontSize: 18 + smaller})
            break
        case "heading1":
            Object.assign(styleObj, Platform.OS === "ios" ? {fontSize: 22} : {fontSize: 21 + smaller})
            break
        case "title":
            Object.assign(styleObj, Platform.OS === "ios" ? {fontSize: 25} : {fontSize: 24 + smaller})
            break
    }


    return (
        <Text style={[styleObj,
            //@ts-ignore
            {
                paddingHorizontal: props.px,
                paddingVertical: props.py,
                letterSpacing: props.letterSpacing? props.letterSpacing : 0.25,
                fontWeight: bold ? props.fontWeight ? props.fontWeight : "bold" : "normal",
                ...props}
        ]}>
            {content}
            {children}
        </Text>
    )
}
