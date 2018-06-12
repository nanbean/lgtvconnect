import {
	SET_TOKEN,
	SET_NOTIFICATION
} from './actionTypes';
import { database, messaging } from '../service/firebase';

export const getTokenSuccess = params => ({
	type: SET_TOKEN,
	payload: params
});

export const getTokenFailure = () => ({
	type: SET_TOKEN,
	payload: ''
});

export const requestPermission = () => (dispatch, getState) => {
	const state = getState();
	const { emailHash, token } = state;
	return messaging.requestPermission()
		.then(() => messaging.getToken())
		.then(newToken => {
			if (newToken !== token) {
				const usersRef = database.ref('/users');
				usersRef.once('value', function(snapshot) {
					if (snapshot.hasChild(emailHash)) {
						const tokensRef = database.ref('users/' + emailHash).child('tokens');
						tokensRef.once('value', function(snap) {
							let list = snap.val();
							list.push(newToken);
							tokensRef.set(list);
						});
					} else {
						database.ref('users/' + emailHash).set({
							tokens: [newToken]
						});
					}
				});
			}
			dispatch(getTokenSuccess(newToken));
		})
		.catch(() => dispatch(getTokenFailure()));
};

export const deleteTokenSuccess = () => ({
	type: SET_TOKEN,
	payload: ''
});

export const deleteTokenFailure = () => ({
	type: SET_TOKEN,
	payload: ''
});

export const removePermission = () => (dispatch, getState) => {
	const state = getState();
	const { emailHash, token } = state;
	return messaging.deleteToken(token)
		.then(() => {
			const usersRef = database.ref('/users');
			usersRef.once('value', function(snapshot) {
				if (snapshot.hasChild(emailHash)) {
					const tokensRef = database.ref('users/' + emailHash).child('tokens');
					tokensRef.once('value', function(snap) {
						let list = snap.val();
						tokensRef.set(list.filter(i => i !== token));
					});
				}
			});
			dispatch(deleteTokenSuccess(token));
		})
		.catch(() => dispatch(deleteTokenFailure()));
};

export const setNotification = (params) => ({
	type: SET_NOTIFICATION,
	payload: params
});
