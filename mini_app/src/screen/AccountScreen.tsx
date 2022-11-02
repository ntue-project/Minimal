import React from "react";
import {BaseLayout, HStack, VStack} from "../component/primitive/Layout";
import {WIDTH} from "../utility/util";
import {VarText} from "../component/primitive/Text";

const AccountScreen : React.FC = () => {

    return (
        <>
            <BaseLayout aCenter>

                <VStack height={280}
                        width={WIDTH * 0.9}
                        borderRadius={12}
                        borderColor={"#FF6d74"}
                        borderWidth={2}

                >

                    <VStack height={144}
                            width={WIDTH * 0.9 - 4}
                            borderRadius={10}
                            backgroundColor={"#FF6d74"}
                    >

                        {/*<HStack>*/}
                        {/*    <VarText>sfcsdgkkk</VarText>*/}
                        {/*    <VarText>sfcsdgkkk</VarText>*/}
                        {/*    <VarText>sfcsdgkkk</VarText>*/}
                        {/*</HStack>*/}

                        {/*<HStack>*/}
                        {/*    <VarText>sfcsdgkkk</VarText>*/}
                        {/*    <VarText>sfcsdgkkk</VarText>*/}
                        {/*    <VarText>sfcsdgkkk</VarText>*/}
                        {/*</HStack>*/}

                    </VStack>

                </VStack>

            </BaseLayout>
        </>
    )
}

export default AccountScreen
