export enum UserDataActionTypes {
    SET_USER = 'SET_USER'
}

interface setUserAction {
    type: UserDataActionTypes.SET_USER,
    payload: object | null
}

export const setUser = (user: object | null): setUserAction => {
    return {
        type: UserDataActionTypes.SET_USER,
        payload: user
    }
}

export type UserDataActions = setUserAction