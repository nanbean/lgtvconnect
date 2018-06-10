import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBX1Gd7nNr2XdO8P_R5078YKs6NaeGSvSA",
    authDomain: "lgtvconnect-bk.firebaseapp.com",
    databaseURL: "https://lgtvconnect-bk.firebaseio.com",
    projectId: "lgtvconnect-bk",
    storageBucket: "lgtvconnect-bk.appspot.com",
    messagingSenderId: "5011567640"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();
