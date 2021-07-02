import { IUserDrawing } from "../UserDrawings/userDrawingsActions"
import { UserDataActionTypes, UserDataActions, IUserData } from "./userDataActions"

const initialState = {
    userName: '',
    images: [] as IUserDrawing[],
    error: ''
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
        case UserDataActionTypes.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case UserDataActionTypes.DELETE_IMAGE:
            return {
                ...state,
                images: [...state.images.filter(image => image.id != action.payload)]
            }
        case UserDataActionTypes.GET_IMAGES:
            return {
                ...state,
                images: action.payload
            }
        default:
            return state
    }
}