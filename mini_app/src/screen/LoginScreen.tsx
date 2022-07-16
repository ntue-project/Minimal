import React, {useState} from "react";
import {GradientButton} from "../component/GradientButton";
import {BaseLayout, HStack, VStack} from "../component/primitive/Layout";
import {Press} from "../component/primitive/Press";
import {HEIGHT, WIDTH} from "../utility/util";

// @ts-ignore
import Logo from '../resource/logo.svg'
import {Text, TextInput} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {AppleIconButton, EyeIcon, EyeOffIcon, FacebookIconButton, GoogleIconButton} from "../component/Icon";
import {VarText} from "../component/primitive/Text";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {NavigationProp} from "@react-navigation/native";
import {selectAccount} from "../global_state/accountSlice";

const LoginScreen: React.FC = () => {

    const [inputPassword, setInputPassword] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputNickname, setInputNickname] = useState("")

    const [showPassword, setShowPassword] = useState(false)

    const dispatch = useDispatch()
    const account = useSelector(selectAccount)

    return (
        <BaseLayout center>
            <VStack justify={"space-between"} aCenter height={HEIGHT * 0.7} width={"100%"}>

                <Logo width={165} height={40}/>

                <VStack marginTop={HEIGHT * 0.05} height={300} justify={"space-between"} aCenter>

                    <HStack width={WIDTH * 0.4} height={48} aCenter justify={"space-between"}>
                        <FacebookIconButton onPress={()=>{
                            console.log("login with facebook")
                            //Facebook login logic
                            //Facebook login logic
                            //Facebook login logic
                        }}/>
                        <GoogleIconButton onPress={()=>{
                            console.log("login with google")
                            //Google login logic
                            //Google login logic
                            //Google login logic
                        }}/>
                        <AppleIconButton onPress={()=>{
                            console.log("login with apple")
                            //Apple login logic
                            //Apple login logic
                            //Apple login logic
                        }}/>
                    </HStack>

                    <HStack height={1} backgroundColor={"#ff5454"} width={WIDTH * 0.75} opacity={0.5}>
                        <VarText type={"heading3"} content={"使用 Minimal 帳號登入"} position={"absolute"} left={"19%"} top={-10} backgroundColor={"white"} px={12}/>
                    </HStack>

                    <VStack>

                        <VStack marginBottom={16}>
                            <VarText type={"heading3"} content={"帳號"} marginBottom={8} marginLeft={8} color="#666"/>
                            <HStack width={WIDTH * 0.8} aCenter borderRadius={15} backgroundColor="#f5f5f5"
                                    paddingRight={12}>

                                <TextInput
                                    style={{
                                        height: 48,
                                        backgroundColor: "transparent",
                                        paddingHorizontal: 16,
                                        fontSize: 13,
                                        color: "#c4c4c4",
                                        flex: 1,
                                    }}
                                    placeholder={"密碼"}
                                    placeholderTextColor={"#c4c4c4"}
                                    textContentType="newPassword"
                                    secureTextEntry={true}
                                    value={inputPassword}
                                    onChangeText={(text) => {
                                        setInputPassword(text)
                                    }}
                                />

                            </HStack>
                        </VStack>

                        <VStack>
                            <VarText type={"heading3"} content={"密碼"} marginBottom={8} marginLeft={8} color="#666"/>
                            <HStack width={WIDTH * 0.8} aCenter borderRadius={15} backgroundColor="#f5f5f5"
                                    paddingRight={12}>

                                <TextInput
                                    style={{
                                        height: 48,
                                        backgroundColor: "transparent",
                                        paddingHorizontal: 16,
                                        fontSize: 13,
                                        color: "#c4c4c4",
                                        flex: 1,
                                    }}
                                    placeholder={"密碼"}
                                    placeholderTextColor={"#c4c4c4"}
                                    textContentType="newPassword"
                                    secureTextEntry={true}
                                    value={inputPassword}
                                    onChangeText={(text) => {
                                        setInputPassword(text)
                                    }}
                                />

                                {showPassword? <EyeIcon/> : <EyeOffIcon/>}
                            </HStack>
                        </VStack>
                    </VStack>
                </VStack>

                <VStack>

                    <GradientButton type={"lg"} title={"哈囉"} width={WIDTH * 0.65} onPress={() => {
                        console.log("hi!!!")
                    }} debugLog="Btn Login Press"/>

                    <HStack height={16} jCenter>
                        <Text
                            style={{
                                fontSize: 14,
                                color: "#888"
                            }}
                        >
                            沒有帳號？
                        </Text>
                        <Press>
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: "#FF5454"
                                }}
                            >
                                註冊
                            </Text>
                        </Press>
                    </HStack>

                </VStack>
            </VStack>
        </BaseLayout>
    )
}

export default LoginScreen