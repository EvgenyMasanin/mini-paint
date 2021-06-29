import { UserDataActionTypes, UserDataActions, IUserData } from "./userDataActions"

const initialState = {
    userName: 'gmasmin',
    images:[] as IUserData[]
}

type UserDataState = typeof initialState

export const userDataReducer = (state = initialState, action: UserDataActions): UserDataState => {
    switch (action.type) {
        case UserDataActionTypes.SET_USER:
            return {
                ...state,
                userName: action.payload
            }
        case UserDataActionTypes.SET_IMAGE:
            return {
                ...state,
                images: [...state.images, action.payload]
            }
        default:
            return state
    }
}