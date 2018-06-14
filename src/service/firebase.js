import firebase from 'firebase';

const config = {
	apiKey: 'your api key',
	authDomain: 'test.firebaseapp.com',
	databaseURL: 'https://test.firebaseio.com',
	projectId: 'test',
	storageBucket: 'test.appspot.com',
	messagingSenderId: 'your sender id'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();
