import React from "react";
import {IArrangeableLayout, IBaseLayout, ILayout} from "../../type_definition/ILayout";
import {SafeAreaView} from "react-native-safe-area-context";
import {TextInput} from "react-native";
import {ITextProps} from "./Text";

interface IInputProps extends IArrangeableLayout, ITextProps {


    placeholder?: string
    placeholderTextColor?: string
    value?: string

    onChangeText?(text: string): void

    onFocus?(): void

    onEndEditing?(): void



    textContentType?:
        | 'none'
        | 'URL'
        | 'addressCity'
        | 'addressCityAndState'
        | 'addressState'
        | 'countryName'
        | 'creditCardNumber'
        | 'emailAddress'
        | 'familyName'
        | 'fullStreetAddress'
        | 'givenName'
        | 'jobTitle'
        | 'location'
        | 'middleName'
        | 'name'
        | 'namePrefix'
        | 'nameSuffix'
        | 'nickname'
        | 'organizationName'
        | 'postalCode'
        | 'streetAddressLine1'
        | 'streetAddressLine2'
        | 'sublocality'
        | 'telephoneNumber'
        | 'username'
        | 'password'
        | 'newPassword'
        | 'oneTimeCode'
        | undefined;

    secureTextEntry?: boolean
}

export const Input: React.FC<IInputProps> = ({...props}) => {


    let styleProps = {...props}

    delete styleProps.placeholder
    delete styleProps.placeholderTextColor
    delete styleProps.textContentType
    delete styleProps.value
    delete styleProps.onChangeText
    delete styleProps.onFocus
    delete styleProps.onEndEditing
    delete styleProps.px
    delete styleProps.py
    delete styleProps.mx
    delete styleProps.my

    return (
        // @ts-ignore
        <TextInput style={{

            height: 32,
            width: 144,

            justifyContent: props.center ? "center" : props.jCenter ? "center" : props.justify,
            alignItems: props.center ? "center" : props.aCenter ? "center" : props.align,

            paddingHorizontal: props.px ? props.px : undefined,
            paddingVertical: props.py ? props.py : undefined,

            marginHorizontal: props.mx ? props.mx : undefined,
            marginVertical: props.my ? props.my : undefined,

            ...styleProps
        }}
                   textContentType={props.textContentType}

                   placeholder={props.placeholder}
                   placeholderTextColor={props.placeholderTextColor}

                   value={props.value}

                   fontWeight={"300"}
                   letterSpacing={props.letterSpacing ? props.letterSpacing : 0.5}

                   onEndEditing={props.onEndEditing}
                   onFocus={props.onFocus}
                   onChangeText={props.onChangeText}


        />
    )


}
