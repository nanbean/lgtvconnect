import {auth, googleAuthProvider} from './firebase';

export function loginWithGoogle() {
	return auth.signInWithPopup(googleAuthProvider);
}

export function logout() {
	return auth.signOut();
}
