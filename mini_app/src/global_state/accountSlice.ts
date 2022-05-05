import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface IAccountObject {

    info: {
        email: string,
        password: string,
        accountName: string
    }
    config: {
        interestedCategory: boolean[]
    }
}

export const initialState = {
    info: {
        email: "",
        password: "",
        accountName: ""
    },
    config: {
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

        setInterestedCategory(state, action: PayloadAction<IAccountObject['config']['interestedCategory']>) {
            state.config.interestedCategory = action.payload
        }
    },
})

export const selectAccount = (state: any) => state.account
export const { setAccountInfo, setInterestedCategory } = accountSlice.actions
export default accountSlice.reducer