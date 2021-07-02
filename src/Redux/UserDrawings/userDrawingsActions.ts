import { Dispatch } from "redux"
import { fireStore } from "../../Firebase/fireBase"
import firebase from 'firebase/app';
import { RootState } from "../reducer";
export enum UserDrawingsActionTypes {
    GET_ALL_IMAGES = 'GET_ALL_IMAGES'
}

interface IGetUserDrawingsAction {
    type: UserDrawingsActionTypes.GET_ALL_IMAGES,
    payload: IUserDrawing[]
}

export interface IUserDrawing {
    id: string
    userName: string
    imageURL: string
    title: string
    description: string
    likes: number
}

export type UserDrawingsActions = IGetUserDrawingsAction

export interface IGetUserDrawings {
    (): (dispatch: Dispatch<UserDrawingsActions>,
        getState: () => RootState) => void
}

export const getUserDrawings: IGetUserDrawings = () => {
    return (dispatch, getState) => {

        const userName = getState().userData.userName

        const userDrawings = [] as IUserDrawing[]
        fireStore.collectionGroup("images").where('userName', '!=', userName).get().then(data => {
            console.log(data);

            data.docs.forEach(doc => {
                const data = doc.data()
                userDrawings.push({
                    id: doc.id,
                    userName: data.userName,
                    title: data.title,
                    description: data.description,
                    likes: data.likes,
                    imageURL: data.imageURL,
                });
            })
            dispatch({
                type: UserDrawingsActionTypes.GET_ALL_IMAGES,
                payload: userDrawings
            })
        })
    }
}
fireStore.collection("Users").get().then(data => {
    data.docs.forEach(doc => {
        console.log(doc.id);

    })
})