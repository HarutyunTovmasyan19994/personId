import {iUser, userAction} from "../../interface";

export interface iPerson {
    user: iUser[]
}

const initialState: iPerson = {
    user: []
}


export const useReducer = ((state = initialState, action: userAction<any>) => {
    switch (action.type) {
        default:
            return state
    }
})
