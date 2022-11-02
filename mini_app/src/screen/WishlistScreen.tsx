import React, {useEffect, useState} from "react";
import {BaseLayout} from "../component/primitive/Layout";
import {ScreenHeader} from "../component/Header";
import {SegmentedButton} from "../component/SegmentedButton";
import {config, useSpring, animated} from "@react-spring/native";
import {useIsFocused, useNavigation} from "@react-navigation/native";

const WishlistScreen: React.FC = () =>{

    const [switchIndex, setSwitchIndex] = useState(1)

    const focused = useIsFocused()
    const [enterAnimation, setEnterAnimation] = useState(false)

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setEnterAnimation(false)
            console.log("BLUR")
        });

        return unsubscribe;
    }, [focused]);

    useEffect(()=> {

        if (focused){
            setEnterAnimation(true)
        }
    },[focused])

    const headerAnimation = useSpring({

        opacity: enterAnimation? 1:0,
        bottom: enterAnimation? 0 : 64,
        config: config.default,
        // onRest: ()=>{
        //     navigation.navigate("Welcome")
        // }
    })

    const SegmentedButtonAnimation = useSpring({

        opacity: enterAnimation? 1:0,
        bottom: enterAnimation? 0 : 48,
        delay: 150,
        config: config.default,
        // onRest: ()=>{
        //     navigation.navigate("Welcome")
        // }
    })

    return(
            <BaseLayout aCenter>

                <animated.View style={headerAnimation}>
                    <ScreenHeader title={"我的最愛"} showBackButton={false} showUtilButton={false}/>

                </animated.View>

                <animated.View style={SegmentedButtonAnimation}>
                    <SegmentedButton leftLabel={"最愛清單"} rightLabel={"追蹤清單"} switchIndex={switchIndex}
                                     onLeftPress={()=> {
                                         setSwitchIndex(1)
                                     }}
                                     onRightPress={()=> {
                                         setSwitchIndex(2)
                                     }}
                    />
                </animated.View>




            </BaseLayout>
    )
}

export default WishlistScreen
