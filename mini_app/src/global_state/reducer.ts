import {ACTIONS} from "./action";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

const initialCounter = {
    counter: 0
}

const counter = (number: Number) => (dispatch : Function) => {
    dispatch({
        type: ACTIONS.SET_NUMBER,
        payload: number,
    })
}

const counterReducer = (state= initialCounter, action : any) => {
    switch(action.type){
        case ACTIONS.SET_NUMBER:
            return {counter: action.payload}
        default: return state
    }
}

export const reducer = combineReducers({
    counter: counterReducer,
})

