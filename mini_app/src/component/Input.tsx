import React from "react";
import {IBaseLayout} from "../type_definition/ILayout";
import {SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAvoidingView, TextInput} from "react-native";

interface IInputProps {

    placeholder?: string
    value: string
    onChangeText?(text: string): void
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

export const Input: React.FC<IInputProps> = (props) => {
    return (
        // @ts-ignore
        <TextInput style={{
            height: 32,
            width: 144,
        }}
                   placeholder={props.placeholder}
                   value={props.value}
                   onChangeText={props.onChangeText}
                   textContentType={props.textContentType}
        />
    )
}