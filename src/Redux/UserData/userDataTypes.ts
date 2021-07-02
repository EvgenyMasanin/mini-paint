import { Dispatch } from "redux"
import { RootState } from "../reducer";
import { IUserDrawing } from "../UserDrawings/userDrawingsActions";

export enum UserDataActionTypes {
    SET_USER = 'SET_USER',
    SET_IMAGE = 'SET_IMAGE',
    SET_LIKE = 'SET_LIKE',
    DELETE_IMAGE = 'DELETE_IMAGE',
    GET_IMAGES = 'GET_IMAGES',
    IS_AUTHORIZED = 'IS_AUTHORIZED',
    SET_ERROR = 'SET_ERROR',
}

export interface ISetUserAction {
    type: UserDataActionTypes.SET_USER,
    payload: string
}

export interface ISetImageAction {
    type: UserDataActionTypes.SET_IMAGE,
    payload: IUserDrawing
}

export interface ISetErrorAction {
    type: UserDataActionTypes.SET_ERROR,
    payload: string
}

export interface IDeleteImageAction {
    type: UserDataActionTypes.DELETE_IMAGE,
    payload: string
}

export interface IUserData {
    id: string
    imageURL: string
    title: string
    description: string
}

export type UserDataActions = ISetUserAction |
    ISetImageAction |
    IDeleteImageAction |
    ISetErrorAction |
    IGetImagesAction

export interface ISetUser {
    (userName: string): ISetUserAction
}
export interface IAuthorizeRegisterUser {
    (email: string,
        password: string):
        (dispatch: Dispatch<ISetUserAction | ISetErrorAction>) => void
}
export interface IIsAuthorized {
    (): (dispatch: Dispatch<ISetUserAction>) => void
}

export interface ISetImage {
    (userName: string,
        imageURL: string,
        title: string,
        description: string): (dispatch: Dispatch<ISetImageAction>) => void
}

export interface IDeleteImage {
    (id: string): (dispatch: Dispatch<IDeleteImageAction>,
        getState: () => RootState) => void
}

export interface IGetImagesAction {
    type: UserDataActionTypes.GET_IMAGES,
    payload: IUserDrawing[]
}

export interface IGetCurrentUserDrawings {
    (): (dispatch: Dispatch<IGetImagesAction>,
        getState: () => RootState) => void
}