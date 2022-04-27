import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AccountState {
    email: string,
    password: string,
    accountName: string
}

const initialState = {
    email: "",
    password: "",
    accountName: ""

} as AccountState

const accountSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // increment(state) {
        //     state = action.payload
        // },
        // decrement(state) {
        //     state.value--
        // },
        createAccount(state, action: PayloadAction<AccountState>) {
            state = action.payload
        },
    },
})

export const { createAccount } = accountSlice.actions
export default accountSlice.reducer