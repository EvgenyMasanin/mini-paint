import { UserDrawingsActionTypes, UserDrawingsActions, IUserDrawing } from "./userDrawingsActions"

const initialState = {
    images: [] as IUserDrawing[]
}

type UserDataState = typeof initialState

export const userDrawingsReducer = (state = initialState, action: UserDrawingsActions): UserDataState => {
    switch (action.type) {
        case UserDrawingsActionTypes.GET_ALL_IMAGES:
            return {
                images: action.payload
            }
        default:
            return state
    }
}