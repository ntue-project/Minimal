import React, {ReactNode, useState} from "react";
import {BaseLayout, HStack, VStack} from "../component/primitive/Layout";
import {WIDTH} from "../utility/util";
import {FlatList, Image, ListRenderItem, Pressable, ScrollView, Text, View} from "react-native";
import {VarText} from "../component/primitive/Text";
import images from "../utility/image";
import {ShoppingCart, WishlistHeartIconButton} from "../component/Icon";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";
import {Press} from "../component/primitive/Press";
import {Input} from "../component/primitive/Input";

export interface IProductItem {
    item: { product_id: number, title: string, price: number, wishlisted: boolean }
}

export interface IProductDataList {
    items: { product_id: number, title: string, price: number, wishlisted: boolean }[]
}

const testData: IProductDataList = {

    items: [
        {
            product_id: 1,
            title: "線圈線條筆記本",
            price: 49,
            wishlisted: true,
        },
        {
            product_id: 2,
            title: "笑臉長尾夾6入",
            price: 29,
            wishlisted: false,
        },
        {
            product_id: 3,
            title: "大迴紋針 12入",
            price: 59,
            wishlisted: true,
        },
        {
            product_id: 4,
            title: "F牌色鉛筆 12色",
            price: 149,
            wishlisted: false,
        },
        {
            product_id: 5,
            title: "枝葉搖曳馬克杯",
            price: 129,
            wishlisted: false,
        },
        {
            product_id: 6,
            title: "裝飾氣氛盆栽",
            price: 139,
            wishlisted: false,
        },
        {
            product_id: 7,
            title: "奇趣氛圍方塊",
            price: 49,
            wishlisted: false,
        },
    ]
}


const ProductItem: React.FC<IProductItem> = ({item}) => {

    return (
        <Pressable
            style={{

                height: "auto",
                width: WIDTH * 0.43,
                marginBottom: 12
                // justifyContent: "center",
                // alignItems: "center",
            }}
        >
            <WishlistHeartIconButton
                props={{
                    wishlisted: item.wishlisted
                }}
                onPress={()=> {

                }}
            />
            <Image source={images.logo.uri}
                   style={{
                       borderRadius: 15,
                       height: WIDTH * 0.43,
                       width: WIDTH * 0.43
                   }}

            />
            <VStack width={WIDTH * .38}
                    height={42}
                    marginTop={6}
                    justify={"space-between"}
            >
                <VarText type={"heading3"} content={item.title} color={"#666666"}/>
                <VarText type={"heading3"} content={"$ " + item.price + ""} color={"#FF5454"}/>
            </VStack>
        </Pressable>
    )
}

const CategoryItem = (props: { categoryText: string, selected: boolean }) => {
    return (
        <Pressable
            style={{
                height: 42,
                paddingHorizontal: 16,
                marginRight: 12,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: props.selected ? "#FF7D54" : "#eee"
            }}
        >
            <VarText type={"normal"} content={props.categoryText} color={props.selected ? "white" : "#666"}/>
        </Pressable>
    )
}

const RenderItem: ListRenderItem<IProductItem['item']> = ({item}) => <ProductItem item={item}/>

const MainScreen: React.FC = () => {

    const [searchText, setSearchText] = useState("")

    return (
        <BaseLayout aCenter>

            <HStack height={54}
                    width={WIDTH * .9}
                    justify={"space-between"}
                    marginBottom={18}
            >
                <Input value={searchText}
                       onChangeText={(text) => {
                           setSearchText(text)
                       }}
                       placeholder={"搜尋..."}
                       backgroundColor={"#eee"}
                       borderRadius={15}
                       height={54}
                       flex={1}
                       fontSize={16}
                       marginRight={12}
                       px={24}
                />

                <ShoppingCart/>

            </HStack>

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


            <FlatList
                ListHeaderComponent={
                    <>

                        <Press
                            height={144}
                            width={WIDTH * 0.9}
                            borderRadius={15}
                        >
                            <Image source={images.logo.uri} style={{
                                height: 144,
                                width: WIDTH * 0.9,
                                borderRadius: 15
                            }}/>
                            <View style={{
                                position: "absolute",
                                height: 144,
                                width: WIDTH * 0.9,
                                borderRadius: 15,
                                opacity: .4,
                                backgroundColor: "black"
                            }}></View>
                            <VarText type={"heading1"} content={"Minimal 文具大賞"} position={"absolute"} bold
                                     color={"white"}

                            />
                        </Press>

                        <HStack height={80}>
                            <ScrollView
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                directionalLockEnabled={true}
                                horizontal={true}
                                contentContainerStyle={{
                                    height: 80,
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

                    </>
                }

                ListHeaderComponentStyle={{
                    justifyContent: "center",
                    alignItems: "center"
                }}

                data={testData.items}
                keyExtractor={item => item.product_id.toString()}
                renderItem={RenderItem}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                columnWrapperStyle={{
                    width: WIDTH * .9,
                    justifyContent: "space-between"
                }}
                contentContainerStyle={{
                    alignItems: "center"
                }}/>
        </BaseLayout>
    )
}

export default MainScreen