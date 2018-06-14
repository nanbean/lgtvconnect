import {auth, googleAuthProvider} from './firebase';

export function loginWithGoogle() {
	return auth.signInWithRedirect(googleAuthProvider);
}

export function logout() {
	return auth.signOut();
}
