import React from "react";
import {SvgProps} from "react-native-svg";

declare module "*.svg" {
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}