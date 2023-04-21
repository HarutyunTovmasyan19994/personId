import { ADD_PERSON } from "../action/action";
import {DELETE_PERSON} from"../action/action";


const initialState = {
    user: []
}


export const useReducer = ((state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON:
            return { ...state, user: [...state.user, action.payload] }
        case DELETE_PERSON:
            return {...state,user:state.user.filter(user => user.id !== action.payload)}
        default:
            return state
    }
})
