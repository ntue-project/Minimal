import {ReactElement, ReactNode} from "react";

export interface ILayout {

    children?: ReactElement | ReactElement[]

    width?: number | string
    height?: number | string

    flex?: number
    display?: string
    position?: string

    top?: number | string,
    right?: number | string,
    bottom?: number | string,
    left?: number | string,

    px?: number | string
    py?: number | string
    padding?: number | string
    paddingLeft?: number | string
    paddingRight?: number | string
    paddingTop?: number | string
    paddingBottom?: number | string

    mx?: number | string
    my?: number | string
    margin?: number | string
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

    color? : string
    backgroundColor?:string
    opacity? : number

    shadowColor? : string
    shadowOpacity? : number
    shadowWidth?: number
    shadowOffset?: {
        height? : number
        width? : number
    }

    elevation?: number
}

export interface IArrangeableLayout extends ILayout {

    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-evenly"
    align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline"

    jCenter?: boolean //stands for justify center
    aCenter?: boolean //stands for align center
    center?: boolean //stands for align center

}

export interface IStackLayout extends IArrangeableLayout {}

export interface IBaseLayout extends IArrangeableLayout {}

export interface ICenterLayout extends IArrangeableLayout {}
