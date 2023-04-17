import {ADD_PERSON} from "../action/action";


const initialState = {
    user: []
}


export const useReducer = ((state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON:
            return {...state,user:[...state.user,action.payload]}
        default:
            return state
    }
})
