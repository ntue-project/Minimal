import {HStack} from "./primitive/Layout";
import React from "react";
import {VarText} from "./primitive/Text";

interface IScreenHeader {

    title: string,
    showBackButton: boolean
    showUtilButton: boolean
}

export const ScreenHeader : React.FC<IScreenHeader> = ({title, showBackButton, showUtilButton}) => {

    return <>

        <HStack height={42} jCenter aCenter>

            <VarText type={"heading2"} content={title} bold/>

        </HStack>

    </>
}
