import React from "react";
import {GradientButton} from "../component/GradientButton";
import {BaseLayout, HStack, VStack} from "../component/base_component/Layout";
import { Button } from "../component/base_component/Button";
import {HEIGHT, WIDTH} from "../utility/util";
import Icon from 'react-native-vector-icons/AntDesign';


// @ts-ignore
import Logo from '../resource/logo.svg'
import {Text} from "react-native";
import {EyeIcon} from "../component/Icon";

const LoginScreen: React.FC = () => {

    return(
        <BaseLayout center>
            <VStack justify={"space-between"} aCenter height={HEIGHT * 0.7} width={"100%"}>

                <Logo width={165} height={40}/>

                <VStack>

                    <Icon name="google" size={30} color="#900" />
                    <GradientButton type={"lg"} title={"哈囉"} width={WIDTH * 0.65} onPress={()=>{ console.log("hi!!!") }} debugLog="Btn Login Press"/>

                    <HStack height={16} jCenter>
                        <Text
                            style={{
                                fontSize: 14,
                                color: "#888"
                            }}
                        >
                            沒有帳號？
                        </Text>
                        <Button>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: "#FF5454"
                                }}
                            >
                                註冊
                            </Text>
                        </Button>
                    </HStack>

                </VStack>
            </VStack>
        </BaseLayout>
    )
}

export default LoginScreen