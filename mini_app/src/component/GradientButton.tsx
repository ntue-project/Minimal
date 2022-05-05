import {Text} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import React from "react";
import {Press} from "./primitive/Press";
import {WIDTH} from "../utility/util";
import {IPress} from "../type_definition/IPress";

interface IGradientButton extends IPress{

    onPress(): void
    title: string
    fontWeight?: "normal" | "bold"
    type: "sm" | "md" | "lg"
    debugLog?: string

}

export const GradientButton :React.FC<IGradientButton> = ( props ) => {

    const buttonType = {
        width: 0,
        height: 0,
        padding: 0,
        fontSize: 0,
        fontWeight: "normal"
    }

    const combinedFunction = () => {
        props.onPress()
        console.log(props.debugLog)
    }

    switch (props.type){
        case "sm":
            buttonType.height = 24
            buttonType.fontSize = 14
            buttonType.padding = 14
            break
        case "md":
            buttonType.height = 36
            buttonType.fontSize = 15
            buttonType.padding = 20
            break
        case "lg":
            buttonType.height = 48
            buttonType.fontSize = 16
            buttonType.padding = 26
            break

    }

    return(
        <Press
            opacity={props.opacity}
            onPress={()=>  combinedFunction() }>

            <LinearGradient
                useAngle={true}
                angle={179}
                angleCenter={{ x: 0.5, y: 0.5}}
                locations={[0, 0.2 ,0.9]}
                colors={['#ffb443', '#ff9029', '#ff3d00']}
                style={{
                    height: buttonType.height,
                    width: props.width,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center"
                }}>

                {/*@ts-ignore*/}
                <Text style={{
                    paddingHorizontal: props.padding? props.padding : buttonType.padding,

                    fontSize: buttonType.fontSize,
                    fontWeight: props.fontWeight? props.fontWeight : buttonType.fontWeight,

                    color: "white",
                }}>
                    {props.title}
                </Text>
            </LinearGradient>
        </Press>

    )
}

