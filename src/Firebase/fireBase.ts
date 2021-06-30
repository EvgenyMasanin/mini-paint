import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore'
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyABxGTmfPzvPbUghv8UYpS4qSSqQU29y6E",
    authDomain: "mini-paint-75a01.firebaseapp.com",
    projectId: "mini-paint-75a01",
    storageBucket: "mini-paint-75a01.appspot.com",
    messagingSenderId: "1026681595962",
    appId: "1:1026681595962:web:b6a08e8680d16c1340ad03"
});

export const fireStore = firebaseApp.firestore()