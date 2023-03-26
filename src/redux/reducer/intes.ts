import {combineReducers} from "redux";
import {iPerson, useReducer} from "./reducer";

interface iRootReducer{
    user:iPerson
}
    export const rootReducer = combineReducers({
    user:useReducer
})
