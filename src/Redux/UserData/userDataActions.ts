import { Dispatch } from "redux"
import { firebaseApp, fireStore } from "../../Firebase/fireBase"
import firebase from 'firebase/app';
import { IUserDrawing } from "../UserDrawings/userDrawingsActions";
import { RootState } from "../reducer";
export enum UserDataActionTypes {
    SET_USER = 'SET_USER',
    SET_IMAGE = 'SET_IMAGE',
    SET_LIKE = 'SET_LIKE',
    DELETE_IMAGE = 'DELETE_IMAGE',
    GET_IMAGES = 'GET_IMAGES',
    IS_AUTHORIZED = 'IS_AUTHORIZED',
    SET_ERROR = 'SET_ERROR',
}

interface ISetUserAction {
    type: UserDataActionTypes.SET_USER,
    payload: string
}

interface ISetImageAction {
    type: UserDataActionTypes.SET_IMAGE,
    payload: IUserDrawing
}

interface ISetErrorAction {
    type: UserDataActionTypes.SET_ERROR,
    payload: string
}

interface IDeleteImageAction {
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

interface ISetUser {
    (userName: string): ISetUserAction
}
interface IAuthorizeRegisterUser {
    (email: string,
        password: string):
        (dispatch: Dispatch<ISetUserAction | ISetErrorAction>) => void
}
interface IIsAuthorized {
    (): (dispatch: Dispatch<ISetUserAction>) => void
}

export const isAuthorized: IIsAuthorized = () => {
    return dispatch => {
        firebaseApp.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch(setUser(user.email?.split('.')[0] as string))
            }
            else {
                dispatch(setUser(''))
            }
        })
    }
}

export const authorizeUser: IAuthorizeRegisterUser = (email, password) => {
    return dispatch => {

        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then((resp) => {
                const userName = resp.user?.email?.split('.')[0]
                dispatch(setUser(userName as string))
            }).catch((err) => {
                dispatch(setError(err.message))
                console.log(err.message);
            })
    }
}

export const registerUser: IAuthorizeRegisterUser = (email, password) => {
    return dispatch => {

        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then((resp) => {
                const userName = resp.user?.email?.split('.')[0]
                dispatch(setUser(userName as string))
            }).catch((err) => {
                dispatch(setError(err.message))
                console.log(err);
            })
    }
}

export const setUser: ISetUser = (userName) => {
    return {
        type: UserDataActionTypes.SET_USER,
        payload: userName
    }
}

export const setError = (errorMessage: string): ISetErrorAction => {
    return {
        type: UserDataActionTypes.SET_ERROR,
        payload: errorMessage
    }
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
            userName,
            title,
            description,
            likes: 0,
            imageURL,
        }
        fireStore.collection('Users').doc(userName).set({}).then(() => {

            fireStore.collection('Users').doc(userName).collection('images').add(data)
                .then((resp) => {
                    console.log("Document written ", resp.id);

                    dispatch({
                        type: UserDataActionTypes.SET_IMAGE,
                        payload: { id: resp.id, ...data }
                    })
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        })
    }
}

interface IDeleteImage {
    (id: string): (dispatch: Dispatch<IDeleteImageAction>,
        getState: () => RootState) => void
}

export const deleteImage: IDeleteImage = (id) => {
    return (dispatch, getState) => {
        const userName = getState().userData.userName
        fireStore.collection('Users').doc(userName).set({}).then(() => {

            fireStore.collection('Users').doc(userName).collection('images').doc(id).delete()
                .then((resp) => {
                    // console.log("Document written ", resp.id);

                    dispatch({
                        type: UserDataActionTypes.DELETE_IMAGE,
                        payload: id
                    })
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        })
    }
}


interface IGetImagesAction {
    type: UserDataActionTypes.GET_IMAGES,
    payload: IUserDrawing[]
}

interface IGetCurrentUserDrawings {
    (): (dispatch: Dispatch<IGetImagesAction>,
        getState: () => RootState) => void
}

export const getCurrentUserDrawings: IGetCurrentUserDrawings = () => {
    console.log(111);

    return (dispatch, getState) => {
        const userName = getState().userData.userName

        const userDrawings = [] as IUserDrawing[]

        fireStore.collection('Users').doc(userName).collection("images").get().then(data => {
            console.log(data);

            data.docs.forEach(doc => {
                const data = doc.data()
                userDrawings.push({
                    id: doc.id,
                    userName,
                    title: data.title,
                    description: data.description,
                    likes: data.likes,
                    imageURL: data.imageURL,
                });
            })
            console.log(userDrawings);

            dispatch({
                type: UserDataActionTypes.GET_IMAGES,
                payload: userDrawings
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}