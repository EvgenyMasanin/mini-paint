import { UserDataActionTypes, UserDataActions } from "./userDataActions"

const initialState = {
    user: null as null | object,
}

type UserDataState = typeof initialState

export const userDataReducer = (state = initialState, action: UserDataActions): UserDataState => {
    switch (action.type) {
        case UserDataActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state
    }
}