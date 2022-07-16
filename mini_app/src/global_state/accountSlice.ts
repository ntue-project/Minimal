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
        wishlistedProduct: IProductDataList
    }
}

export const initialState = {

    info: {
        email: "",
        password: "",
        accountName: ""
    },
    personalization: {
        interestedCategory: [false,false,false,false,false,false,false,false,false,false,false,false]
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
        }
    },
})

export const selectAccount = (state: any) => state.account
export const { setAccountInfo, setInterestedCategory } = accountSlice.actions
export default accountSlice.reducer
