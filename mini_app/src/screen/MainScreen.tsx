import React, { ReactNode, useEffect, useState } from "react";
import {BaseLayout, HStack, VStack} from "../component/primitive/Layout";
import {WIDTH} from "../utility/util";
import {FlatList, Image, ListRenderItem, Pressable, ScrollView, Text, View} from "react-native";
import {VarText} from "../component/primitive/Text";
import images from "../utility/image";
import {MainScreenSearchButton, ShoppingCart, WishlistHeartIconButton} from "../component/Icon";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";
import {Press} from "../component/primitive/Press";
import {Input} from "../component/primitive/Input";
import * as tf from "@tensorflow/tfjs"
import {selectAccount, setProductLikeStatus} from "../global_state/accountSlice";
import {useDispatch, useSelector} from "react-redux";
import {print4} from "../utility/console";
import {useIsFocused, useNavigation} from "@react-navigation/native";
import {config, useSpring, animated} from "@react-spring/native";

export interface IProductItem {

    product_id: number,
    title: string,
    price: number
}

export interface IProductDataList {

    items: IProductItem[]
}

const testData: IProductDataList = {

    items: [
        {
            product_id: 1,
            title: "線圈線條筆記本",
            price: 49,
        },
        {
            product_id: 2,
            title: "笑臉長尾夾6入",
            price: 29,
        },
        {
            product_id: 3,
            title: "大迴紋針 12入",
            price: 59,
        },
        {
            product_id: 4,
            title: "F牌色鉛筆 12色",
            price: 149,
        },
        {
            product_id: 5,
            title: "枝葉搖曳馬克杯",
            price: 129,
        },
        {
            product_id: 6,
            title: "裝飾氣氛盆栽",
            price: 139,
        },
        {
            product_id: 7,
            title: "奇趣氛圍方塊",
            price: 49,
        },
    ]
}

const ProductItem: React.FC<IProductItem> = ({product_id, title, price}) => {

    const account = useSelector(selectAccount)
    const dispatch = useDispatch()
    const [isLiked, setIsLiked] = useState(false)

    useEffect(()=> {

        // console.log("This Product is in LikedProduct " + )
        // console.log("This is the likedProduct" + JSON.stringify(account.personalization.likedProduct.items.find((product: IProductItem) => product.product_id === 1), null, 2))

        setIsLiked(account.personalization.likedProduct.items.some((product: IProductItem) => product.product_id == product_id))

    }, [account])

    return (

        <Pressable

            style={{

                height: "auto",
                width: WIDTH * 0.43,
                marginBottom: 10
                // justifyContent: "center",
                // alignItems: "center",
            }}
        >
            <WishlistHeartIconButton

                props={{
                    liked: isLiked
                }}

                onPress={()=> {

                    dispatch(setProductLikeStatus({product_id: product_id, title: title, price: price}))
                }}
            />

            <Image source={images.logo.uri}
                   style={{
                       borderRadius: 12,
                       height: WIDTH * 0.43,
                       width: WIDTH * 0.43
                   }}

            />
            <VStack width={WIDTH * .38}
                    height={42}
                    marginTop={6}
                    marginLeft={2}
                    justify={"flex-start"}
            >
                <VarText marginTop={2} type={"heading3"} content={title} color={"#666666"}/>
                <VarText marginTop={3} type={"heading3"} bold content={"$ " + price + ""} color={"#FF5454"}/>
            </VStack>
        </Pressable>
    )
}

const CategoryItem = (props: { categoryText: string, selected: boolean }) => {

    return (

        <LinearGradient
            useAngle={true}
            angle={170}
            angleCenter={{ x: 0.5, y: 0.75}}
            locations={[0, 0.6]}
            colors={ props.selected ?
                ['#ffa947', "#ff6a50"] :
                ["#eee" , "#eee"]}

            style={ props.selected?
                { flex: 1 , marginRight: 12, borderRadius: 12} :
                { flex: 1 , marginRight: 12, borderRadius: 12, borderWidth: 1, borderColor: "#ddd"}}
        >
            <Pressable
                style={{

                    height: props.selected? 36 : 34,
                    paddingHorizontal: 14,
                    borderRadius: 12,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    // backgroundColor: props.selected ? "#FF7D54" : "#eee",
                }}
            >

                <VarText type={"normal"} letterSpacing={1} fontWeight={props.selected? "800" : "400"} content={props.categoryText} color={props.selected ? "white" : "#666"}/>
            </Pressable>
        </LinearGradient>


    )
}

const SearchResultItem: React.FC<IProductItem> = ({product_id, title, price}) => {

    useEffect(()=> {


    }, [])

    return (
        <Pressable
            style={{

                height: "auto",
                width: WIDTH * 0.43,
                marginBottom: 10
                // justifyContent: "center",
                // alignItems: "center",
            }}
        >
            <WishlistHeartIconButton

                props={{
                    liked: true
                }}

                onPress={()=> {

                }}
            />
            <Image source={images.logo.uri}
                   style={{
                       borderRadius: 12,
                       height: WIDTH * 0.43,
                       width: WIDTH * 0.43
                   }}

            />
            <VStack width={WIDTH * .38}
                    height={42}
                    marginTop={6}
                    marginLeft={2}
                    justify={"flex-start"}
            >
                <VarText marginTop={2} type={"heading3"} content={title} color={"#666666"}/>
                <VarText marginTop={3} type={"heading3"} bold content={"$ " + price + ""} color={"#FF5454"}/>
            </VStack>
        </Pressable>
    )
}

const ProductRenderItem: ListRenderItem<IProductItem> = ({item}) =>

    <ProductItem product_id={item.product_id}
                 title={item.title}
                 price={item.price}/>

const SearchResultRenderItem: ListRenderItem<IProductItem> = ({item}) =>

    <SearchResultItem product_id={item.product_id}
                      title={item.title}
                      price={item.price}/>




const MainScreen: React.FC = () => {

    const [searchText, setSearchText] = useState("")
    const [isSearching, setIsSearching] = useState(false)
    const [searchResult, setSearchResult] = useState<IProductDataList["items"]>([])
    const [enterAnimation, setEnterAnimation] = useState(false)

    const likedProduct = useSelector(selectAccount).personalization.likedProduct
    const dispatch = useDispatch()
    const account = useSelector(selectAccount)

    const focused = useIsFocused()

    const navigation = useNavigation()

    const SearchBarAnimation = useSpring({

        opacity: enterAnimation? 1 : 0,
        bottom: enterAnimation? 0 : 64,
        delay: 50,
        config: config.default,
    })

    const SearchButtonAnimation = useSpring({

        opacity: enterAnimation? 1 : 0,
        bottom: enterAnimation? 0 : 64,
        delay: 100,
        config: config.default,
    })

    const TopBannerAnimation = useSpring({

        opacity: enterAnimation? 1 : 0,
        left: enterAnimation? 0 : 64,
        delay: 125,
        config: config.default,
    })

    const CategorySectionAnimation = useSpring({

        opacity: enterAnimation? 1:0,
        left: enterAnimation? 0 : 64,
        delay: 50,
        config: config.default,
    })

    const ProductSectionAnimation = useSpring({

        opacity: enterAnimation? 1:0,
        left: enterAnimation? 0 : 96,
        delay: 0,
        config: config.slow,
    })

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

    useEffect(()=> {

        print4("info", "MainScreen-Main", "ReduxData-Account", JSON.stringify(account, null, 2))

    }, [account])

    useEffect(()=> {

        const result = testData.items.filter( word => word.title.includes(searchText))
        setSearchResult(result)
        console.log(result)

    }, [searchText])

    useEffect(()=> {

        console.log("likedProduct: " + likedProduct)

    },[likedProduct])

    return (

        <BaseLayout aCenter>

            <animated.View style={SearchBarAnimation}>
                <HStack height={48}
                        width={WIDTH * .9}
                        justify={"space-between"}
                        marginBottom={ isSearching? 20 : 14}
                >
                    {/*// @ts-ignore*/}
                    <Input value={searchText}

                           onChangeText={(text) => {
                               setSearchText(text)
                           }}

                           onFocus={()=> {
                               setIsSearching(true)
                               console.log("FOCUSED!")
                           }}

                           onEndEditing={()=> {
                               setIsSearching(false)
                           }}

                           placeholder={"搜尋..."}
                           placeholderTextColor={"#666"}
                           color={"#000"}
                           backgroundColor={"#f2f2f2"}
                           borderRadius={12}
                           borderWidth={1}
                           borderColor={"#ddd"}
                           height={50}
                           flex={1}
                           fontSize={16}
                           marginRight={14}
                           px={24}
                    />

                    <animated.View style={SearchButtonAnimation}>
                        { isSearching? <MainScreenSearchButton/> : <ShoppingCart/> }
                    </animated.View>

                </HStack>
            </animated.View>



            {/*<MaskedView*/}
            {/*    style={{ flex: 1, flexDirection: 'row', height: 364 }}*/}
            {/*    maskElement={*/}
            {/*        <View*/}
            {/*            style={{*/}
            {/*                // Transparent background because mask is based off alpha channel.*/}
            {/*                backgroundColor: 'transparent',*/}
            {/*                flex: 1,*/}
            {/*                justifyContent: 'center',*/}
            {/*                alignItems: 'center',*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <Text*/}
            {/*                style={{*/}
            {/*                    fontSize: 60,*/}
            {/*                    color: 'black',*/}
            {/*                    fontWeight: 'bold',*/}
            {/*                }}*/}
            {/*            >*/}
            {/*                Basic Mask*/}
            {/*            </Text>*/}
            {/*        </View>*/}
            {/*    }*/}
            {/*>*/}
            {/*    /!* Shows behind the mask, you can put anything here, such as an image *!/*/}
            {/*    <LinearGradient*/}
            {/*        colors={['#ffe17f', '#ffd03a', "#ff3535", "#ff7e7e"]}*/}
            {/*        style={{ flex: 1, height: "100%" }}*/}
            {/*    />*/}
            {/*    /!*<View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />*!/*/}
            {/*    /!*<View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />*!/*/}
            {/*    /!*<View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />*!/*/}
            {/*    /!*<View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />*!/*/}
            {/*</MaskedView>*/}

            { !isSearching?

                <animated.View style={ProductSectionAnimation}>
                    <FlatList

                        ListHeaderComponent={

                            <>
                                <animated.View style={TopBannerAnimation}>
                                    <Press
                                        height={144}
                                        width={WIDTH * 0.9}
                                        borderRadius={12}
                                        marginTop={6}
                                    >
                                        <Image source={images.logo.uri} style={{
                                            height: 144,
                                            width: WIDTH * 0.9,
                                            borderRadius: 12
                                        }}/>
                                        <View style={{
                                            position: "absolute",
                                            height: 144,
                                            width: WIDTH * 0.9,
                                            borderRadius: 12,
                                            opacity: .4,
                                            backgroundColor: "black"
                                        }}></View>
                                        <VarText type={"heading1"} content={"Minimal 文具大賞"} position={"absolute"} bold
                                                 color={"white"}

                                        />
                                    </Press>
                                </animated.View>



                                <animated.View style={CategorySectionAnimation}>

                                    <HStack height={68}>
                                        <ScrollView
                                            showsHorizontalScrollIndicator={false}
                                            showsVerticalScrollIndicator={false}
                                            directionalLockEnabled={true}
                                            horizontal={true}
                                            contentContainerStyle={{
                                                height: 68,
                                                paddingHorizontal: WIDTH * .05,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                // backgroundColor: "black"
                                            }}
                                        >
                                            <CategoryItem categoryText={"所有"} selected={true}/>
                                            <CategoryItem categoryText={"書寫工具"} selected={false}/>
                                            <CategoryItem categoryText={"繪圖工具"} selected={false}/>
                                            <CategoryItem categoryText={"圖文創作"} selected={false}/>
                                            <CategoryItem categoryText={"圖文創作"} selected={false}/>
                                        </ScrollView>
                                    </HStack>

                                </animated.View>



                            </>
                        }

                        ListHeaderComponentStyle={{
                            justifyContent: "center",
                            alignItems: "center"
                        }}

                        data={testData.items}
                        keyExtractor={item => item.product_id.toString()}
                        renderItem={ProductRenderItem}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        columnWrapperStyle={{
                            width: WIDTH * 0.9,
                            justifyContent: "space-between"
                        }}
                        contentContainerStyle={{
                            alignItems: "center"
                        }}/>
                </animated.View>
                 :


                    <FlatList

                        data={searchResult}
                        keyExtractor={item => "result_" + item.product_id.toString()}
                        renderItem={SearchResultRenderItem}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        columnWrapperStyle={{
                            width: WIDTH * 0.9,
                            justifyContent: "space-between"
                        }}
                        contentContainerStyle={{
                            alignItems: "center"
                        }}/>
            }


        </BaseLayout>
    )
}

export default MainScreen
