import { Dispatch } from "redux"
import { fireStore } from "../../Firebase/fireBase"

export enum UserDataActionTypes {
    SET_USER = 'SET_USER',
    SET_IMAGE = 'SET_IMAGE',
    SET_LIKE = 'SET_LIKE',
    DELETE_IMAGE = 'DELETE_IMAGE',
}

interface ISetUserAction {
    type: UserDataActionTypes.SET_USER,
    payload: string
}

interface ISetImageAction {
    type: UserDataActionTypes.SET_IMAGE,
    payload: IUserData
}

// interface ISetImage {
//     userName: string
//     imageURL: string
//     title: string
//     description: string
// }

interface IDeleteImage {
    userName: string
    imageId: string
}

export interface IUserData {
    id: string
    imageURL: string
    title: string
    description: string
}

export type UserDataActions = ISetUserAction | ISetImageAction

export const setUser = (userName: string): ISetUserAction => {
    return {
        type: UserDataActionTypes.SET_USER,
        payload: userName
    }
}

// export const setUser = (user: object | null): (dispatch: Dispatch) => void => {
//     return (dispatch: Dispatch) => {
//         dispatch({
//             type: UserDataActionTypes.SET_USER,
//             payload: user
//         })
//     }
// }


interface ISetImageParams {
    userName: string
    imageURL: string
    title: string
    description: string
}

interface ISetImage {
    (userName: string,
        imageURL: string,
        title: string,
        description: string): (dispatch: Dispatch<ISetImageAction>) => void
}

export const setImage: ISetImage = (userName, imageURL, title, description) => {
    return (dispatch) => {

        const data = {
            imageURL,
            likes: 0,
            title,
            description
        }

        fireStore.collection(userName).add(data)
            .then((resp) => {
                console.log("Document written ", resp.id);

                dispatch({
                    type: UserDataActionTypes.SET_IMAGE,
                    payload: { ...data, id: resp.id }
                })
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });

    }
}