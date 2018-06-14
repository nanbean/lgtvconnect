import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyCeRmr6s3qieABkvBEmy7RdTtGz_DrU7_g',
	authDomain: 'lgtvconnect2.firebaseapp.com',
	databaseURL: 'https://lgtvconnect2.firebaseio.com',
	projectId: 'lgtvconnect2',
	storageBucket: 'lgtvconnect2.appspot.com',
	messagingSenderId: '126193434880'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const messaging = firebase.messaging();
