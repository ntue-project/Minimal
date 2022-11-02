import React, {useEffect, useState} from "react";
import {Image, Pressable} from "react-native";
import {BaseLayout, HStack, VStack} from "../component/primitive/Layout";
import {HEIGHT, WIDTH} from "../utility/util";
import {VarText} from "../component/primitive/Text";
import images from "../utility/image";
import {GradientButton} from "../component/GradientButton";
import {useDispatch, useSelector} from "react-redux";
import {IAccountObject, selectAccount, setInterestedCategory} from "../global_state/accountSlice";
import {IconProps} from "react-native-vector-icons/Icon";
import {Press} from "../component/primitive/Press";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootParamList} from "../../App";

const InterestItem = (props: { uri: object, index: number }) => {

    const accountData = useSelector(selectAccount)
    const dispatch = useDispatch()

    const [interests, setInterests] = useState<IAccountObject["personalization"]["interestedCategory"]>()

    useEffect(() => {
        setInterests(accountData.personalization.interestedCategory)
    }, [accountData])

    return (

        <Pressable

            style={{
                margin: 4,
                borderRadius: 15,
                height: WIDTH * 0.25,
                width: WIDTH * 0.25,
            }}

            onPress={() => {
                dispatch(setInterestedCategory(interests!.map(( x, index) => index === props.index ? x = !x : x )))
            }}

        >
            <Image

                source={props.uri}
                style={{
                    //@ts-ignore
                    opacity: interests ? interests[props.index] ? 1 : .5 : .5,
                    borderRadius: 15,
                    height: WIDTH * 0.25,
                    width: WIDTH * 0.25
            }}/>

        </Pressable>
    )
}

type MainScreenProps = NativeStackNavigationProp<RootParamList, '首頁'>;

const InterestScreen: React.FC = () => {

    const navigation = useNavigation<MainScreenProps>()

    const accountData = useSelector(selectAccount)
    const dispatch = useDispatch()
    const [interests, setInterests] = useState<IAccountObject["personalization"]["interestedCategory"]>()

    useEffect(() => {
        setInterests(accountData.personalization.interestedCategory)
    }, [accountData])

    return (
        <>
            <BaseLayout center>
                <VStack height={HEIGHT * .15} center>
                    <VarText type={"heading2"} content="選擇您感興趣的商品" color={"#666"}/>
                    <VarText type={"heading3"} content="選擇多個種類" color={"#999"}/>
                </VStack>

                <VStack>
                    <HStack>
                        <InterestItem
                            index={0}
                            uri={images.logo.uri}
                        />
                        <InterestItem
                            index={1}
                            uri={images.logo.uri}
                        />
                        <InterestItem
                            index={2}
                            uri={images.logo.uri}
                        />
                    </HStack>
                    <HStack>
                        <InterestItem
                            index={3}
                            uri={images.logo.uri}
                        />
                        <InterestItem
                            index={4}
                            uri={images.logo.uri}
                        />
                        <InterestItem
                            index={5}
                            uri={images.logo.uri}
                        />
                    </HStack>
                    <HStack>
                        <InterestItem
                            index={6}
                            uri={images.logo.uri}
                        />
                        <InterestItem
                            index={7}
                            uri={images.logo.uri}
                        />
                        <InterestItem
                            index={8}
                            uri={images.logo.uri}
                        />
                    </HStack>
                    <HStack>
                        <InterestItem
                            index={9}
                            uri={images.logo.uri}
                        />
                        <InterestItem
                            index={10}
                            uri={images.logo.uri}
                        />
                        <InterestItem
                            index={11}
                            uri={images.logo.uri}
                        />
                    </HStack>
                </VStack>

                <VStack height={84}
                        my={36}
                        justify={"space-between"}>


                    <GradientButton
                        opacity={interests?.some(item => item) ? 1 : .5}
                        onPress={interests?.some(item => item) ?
                            () => {
                                navigation.navigate('TabContent', {screen: '首頁'})
                            } :
                            () => {
                            }
                        }
                        title={"確定"} type={"lg"} width={WIDTH * 0.6}/>
                    <Press
                        onPress={() => {
                            navigation.navigate('TabContent', {screen: '首頁'});
                            dispatch(setInterestedCategory([false, false, false, false, false, false, false, false, false, false, false, false]))
                        }}
                    >
                        <VarText type={"heading3"} content={"略過"} color={"#888"}/>
                    </Press>

                </VStack>

            </BaseLayout>
        </>
    )
}

export default InterestScreen
