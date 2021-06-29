import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore'
import 'firebase/auth';
// require('dotenv').config()

// console.log(process.env);

const firebaseApp = firebase.initializeApp({
    // apiKey: "AIzaSyDD-ppPglGnf-kl5fmMrDFRj96L_7paZvQ",
    // authDomain: "clever-to-do-list-e5328.firebaseapp.com",
    // databaseURL: 'https://clever-to-do-list-e5328.firebaseapp.com'


    apiKey: "AIzaSyABxGTmfPzvPbUghv8UYpS4qSSqQU29y6E",
    authDomain: "mini-paint-75a01.firebaseapp.com",
    projectId: "mini-paint-75a01",
    storageBucket: "mini-paint-75a01.appspot.com",
    messagingSenderId: "1026681595962",
    appId: "1:1026681595962:web:b6a08e8680d16c1340ad03"
});
console.log(firebase);

// const base = Rebase.createClass(firebaseApp.firestore());
export const fireStore = firebaseApp.firestore()

// export default base;