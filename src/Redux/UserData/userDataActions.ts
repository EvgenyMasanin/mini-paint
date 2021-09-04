import { firebaseApp, fireStore } from '../../Firebase/fireBase';
import { IUserDrawing } from '../UserDrawings/userDrawingsActions';
import {
  IAuthorizeRegisterUser,
  IDeleteImage,
  IGetCurrentUserDrawings,
  IIsAuthorized,
  ISetErrorAction,
  ISetImage,
  ISetUser,
  UserDataActionTypes,
} from './userDataTypes';

export const isAuthorized: IIsAuthorized = () => {
  return (dispatch) => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user.email?.split('.')[0] as string));
      } else {
        dispatch(setUser(''));
      }
    });
  };
};

export const authorizeUser: IAuthorizeRegisterUser = (email, password) => {
  return (dispatch) => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((resp) => {
        const userName = resp.user?.email?.split('.')[0];
        dispatch(setUser(userName as string));
      })
      .catch((err) => {
        dispatch(setError(err.message));
      });
  };
};

export const registerUser: IAuthorizeRegisterUser = (email, password) => {
  return (dispatch) => {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((resp) => {
        const userName = resp.user?.email?.split('.')[0];
        dispatch(setUser(userName as string));
      })
      .catch((err) => {
        dispatch(setError(err.message));
      });
  };
};

export const setUser: ISetUser = (userName) => {
  return {
    type: UserDataActionTypes.SET_USER,
    payload: userName,
  };
};

export const setError = (errorMessage: string): ISetErrorAction => {
  return {
    type: UserDataActionTypes.SET_ERROR,
    payload: errorMessage,
  };
};

export const setImage: ISetImage = (userName, imageURL, title, description) => {
  return (dispatch) => {
    const data = {
      userName,
      title,
      description,
      likes: 0,
      imageURL,
    };
    fireStore
      .collection('Users')
      .doc(userName)
      .set({})
      .then(() => {
        fireStore
          .collection('Users')
          .doc(userName)
          .collection('images')
          .add(data)
          .then((resp) => {
            dispatch({
              type: UserDataActionTypes.SET_IMAGE,
              payload: { id: resp.id, ...data },
            });
          })
          .catch((error) => {
            console.error('Error adding document: ', error);
          });
      });
  };
};

export const deleteImage: IDeleteImage = (id) => {
  return (dispatch, getState) => {
    const userName = getState().userData.userName;
    fireStore
      .collection('Users')
      .doc(userName)
      .set({})
      .then(() => {
        fireStore
          .collection('Users')
          .doc(userName)
          .collection('images')
          .doc(id)
          .delete()
          .then((resp) => {
            dispatch({
              type: UserDataActionTypes.DELETE_IMAGE,
              payload: id,
            });
          })
          .catch((error) => {
            console.error('Error adding document: ', error);
          });
      });
  };
};

export const getCurrentUserDrawings: IGetCurrentUserDrawings = () => {
  return (dispatch, getState) => {
    const userName = getState().userData.userName;

    const userDrawings = [] as IUserDrawing[];

    fireStore
      .collection('Users')
      .doc(userName)
      .collection('images')
      .get()
      .then((data) => {
        data.docs.forEach((doc) => {
          const data = doc.data();
          userDrawings.push({
            id: doc.id,
            userName,
            title: data.title,
            description: data.description,
            likes: data.likes,
            imageURL: data.imageURL,
          });
        });

        dispatch({
          type: UserDataActionTypes.GET_IMAGES,
          payload: userDrawings,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
