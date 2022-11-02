import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IProductDataList, IProductItem} from "../screen/MainScreen";

export interface IAccountObject {

    info: {

        email: string,
        password: string,
        accountName: string
    }

    personalization: {

        interestedCategory: boolean[]
        likedProduct: IProductDataList
        wishlistedProduct: IProductDataList
    }

    data: {


    }
}

export const initialState = {

    info: {
        email: "",
        password: "",
        accountName: ""
    },

    personalization: {

        interestedCategory: [false,false,false,false,false,false,false,false,false,false,false,false],
        likedProduct: {
            items: [
                {
                    product_id: 1,
                    title: "線圈線條筆記本",
                    price: 49,
                }
            ]},
        wishlistedProduct: { items: [{}]}
    },

    data: {

    }

} as IAccountObject

const accountSlice = createSlice({

    name: 'account',
    initialState,
    reducers: {
        // increment(state) {
        //     state = action.payload
        // },
        // decrement(state) {
        //     state.value--
        // },
        setAccountInfo(state, action: PayloadAction<IAccountObject['info']>) {
            state.info = action.payload
        },

        setInterestedCategory(state, action: PayloadAction<IAccountObject['personalization']['interestedCategory']>) {
            state.personalization.interestedCategory = action.payload
        },

        setProductLikeStatus(state, action: PayloadAction<IProductItem>) {

            // let dummy = [...state.personalization.likedProduct.items]

            if(!state.personalization.likedProduct.items.some((product: IProductItem) => product.product_id === action.payload.product_id)) {

                // @ts-ignore
                state.personalization.likedProduct.items.push(action.payload)

            } else {

                state.personalization.likedProduct.items = state.personalization.likedProduct.items.filter((product: IProductItem) => product.product_id !== action.payload.product_id)
            }

        }
    },
})

export const selectAccount = (state: any) => state.account
export const { setAccountInfo, setInterestedCategory, setProductLikeStatus } = accountSlice.actions
export default accountSlice.reducer

