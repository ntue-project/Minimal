import React from "react";
import {IPressWithProps} from "../type_definition/IPress";
import {Pressable, View} from "react-native";
import {WIDTH} from "../utility/util";
import MaskedView from "@react-native-masked-view/masked-view";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import {useNavigation} from "@react-navigation/native";

export const TabHomeIcon: React.FC<IPressWithProps> = ({onPress, props}) => {

    return(

        <Pressable style={{
            zIndex: 100,
            borderRadius: 100,
            height: 32,
            width: 32,
            justifyContent: "center",
            alignItems: "center",
        }}
                   onPress={onPress}>
            <MaskedView
                style={{ flex: 1, flexDirection: 'row', height: 32 }}
                maskElement={
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Feather
                                name="home"
                                size={24}
                                color="white"
                            />
                    </View>
                }>

                {props.focused?
                    <LinearGradient
                        useAngle={true}
                        angle={170}
                        angleCenter={{ x: 0.5, y: 0.5}}
                        locations={[0, 0.35, 0.85]}
                        colors={['#ffc428','#ff953b', "#ff3434"]}
                        style={{ flex: 1 }}
                    /> :
                    <View style={{
                        flex: 1,
                        backgroundColor: "#ccc"
                    }}/>
                }

            </MaskedView>
        </Pressable>
    )
}

export const TabWishlistIcon: React.FC<IPressWithProps> = ({onPress, props}) => {
    return(
        <Pressable style={{
            zIndex: 100,
            borderRadius: 100,
            height: 32,
            width: 32,
            justifyContent: "center",
            alignItems: "center",
        }}
                   onPress={onPress}>
            <MaskedView
                style={{ flex: 1, flexDirection: 'row', height: 32 }}
                maskElement={
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Feather
                            name="heart"
                            size={24}
                            color="white"
                        />
                    </View>
                }>
                {props.focused?
                    <LinearGradient
                        useAngle={true}
                        angle={170}
                        angleCenter={{ x: 0.5, y: 0.5}}
                        locations={[0, 0.35, 0.85]}
                        colors={['#ffc428','#ff953b', "#ff3434"]}
                        style={{ flex: 1 }}
                    /> :
                    <View style={{
                        flex: 1,
                        backgroundColor: "#ccc"
                    }}/>
                }

            </MaskedView>
        </Pressable>
    )
}

export const TabNotificationIcon: React.FC<IPressWithProps> = ({onPress, props}) => {
    return(
        <Pressable style={{
            zIndex: 100,
            borderRadius: 100,
            height: 32,
            width: 32,
            justifyContent: "center",
            alignItems: "center",
        }}
                   onPress={onPress}>
            <MaskedView
                style={{ flex: 1, flexDirection: 'row', height: 32 }}
                maskElement={
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Feather
                            name="bell"
                            size={24}
                            color="white"
                        />
                    </View>
                }>
                {props.focused?
                    <LinearGradient
                        useAngle={true}
                        angle={170}
                        angleCenter={{ x: 0.5, y: 0.5}}
                        locations={[0, 0.35, 0.85]}
                        colors={['#ffc428','#ff953b', "#ff3434"]}
                        style={{ flex: 1 }}
                    /> :
                    <View style={{
                        flex: 1,
                        backgroundColor: "#ccc"
                    }}/>
                }

            </MaskedView>
        </Pressable>
    )
}

export const TabAccountIcon: React.FC<IPressWithProps> = ({onPress, props}) => {
    return(
        <Pressable style={{
            zIndex: 100,
            borderRadius: 100,
            height: 32,
            width: 32,
            justifyContent: "center",
            alignItems: "center",
        }}
                   onPress={onPress}>
            <MaskedView
                style={{ flex: 1, flexDirection: 'row', height: 32 }}
                maskElement={
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Feather
                            name="user"
                            size={25}
                            color="white"
                        />
                    </View>
                }>
                {props.focused?
                    <LinearGradient
                        useAngle={true}
                        angle={170}
                        angleCenter={{ x: 0.5, y: 0.5}}
                        locations={[0, 0.35, 0.85]}
                        colors={['#ffc428','#ff953b', "#ff3434"]}
                        style={{ flex: 1 }}
                    /> :
                    <View style={{
                        flex: 1,
                        backgroundColor: "#ccc"
                    }}/>
                }

            </MaskedView>
        </Pressable>
    )
}
