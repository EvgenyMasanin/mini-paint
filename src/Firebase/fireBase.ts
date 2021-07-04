import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore'
import 'firebase/auth';

const env = process.env
console.log(env);

export const firebaseApp = firebase.initializeApp({
    apiKey: env.REACT_APP_API_KEY,
    authDomain: env.REACT_APP_AUTH_DOMAIN ,
    projectId: env.REACT_APP_PROJECT_ID ,
    storageBucket: env.REACT_APP_STORAGE_BUCKET ,
    messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID ,
    appId: env.REACT_APP_APP_ID 
});

export const fireStore = firebaseApp.firestore()