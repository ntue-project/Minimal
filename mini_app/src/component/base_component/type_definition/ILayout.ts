import {ReactElement} from "react";

export interface ILayout{

    children?: ReactElement | ReactElement[]

    width?: number | string
    height?: number | string

    flex?: number
    display?: string
    position?: string

    px?: number | string
    py?: number | string
    paddingLeft?: number | string
    paddingRight?: number | string
    paddingTop?: number | string
    paddingBottom?: number | string

    mx?: number | string
    my?: number | string
    marginTop?: number | string
    marginRight?: number | string
    marginBottom?: number | string
    marginLeft?: number | string

    borderRadius?: number
    borderTopRightRadius?:number
    borderTopLeftRadius?:number
    borderBottomRightRadius?:number
    borderBottomLeftRadius?:number

    borderWidth?: number
    borderTopWidth?: number
    borderRightWidth?: number
    borderBottomWidth?: number
    borderLeftWidth?: number

    borderColor?: string
    borderTopColor?: string
    borderRightColor?: string
    borderBottomColor?: string
    borderLeftColor?: string

    backgroundColor?:string

    shadowColor? : string
    shadowOpacity? : number
    shadowWidth?: number
    shadowOffset?: {
        height? : number
        width? : number
    }

    elevation?: number
}

export interface IStackLayout extends ILayout {

    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-evenly"
    align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline"

    jCenter?: boolean //stands for justify center
    aCenter?: boolean //stands for align center
    center?: boolean //stands for align center

}

export interface IBaseLayout extends ILayout {

    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-evenly"
    align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline"

    jCenter?: boolean //stands for justify center
    aCenter?: boolean //stands for align center
    center?: boolean //stands for align center

}

export interface ICenterLayout extends ILayout {
}