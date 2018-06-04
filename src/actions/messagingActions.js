import {
	SET_TOKEN,
	SET_NOTIFICATION
} from './actionTypes';
import { messaging } from '../service/firebase';

export const getTokenSuccess = params => ({
	type: SET_TOKEN,
	payload: params
});

export const getTokenFailure = () => ({
	type: SET_TOKEN,
	payload: ''
});

export const requestPermission = () => (dispatch) => {
	return messaging.requestPermission()
		.then(() => messaging.getToken())
		.then(token => dispatch(getTokenSuccess(token)))
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
	return messaging.deleteToken(state.token)
		.then(token => dispatch(deleteTokenSuccess(token)))
		.catch(() => dispatch(deleteTokenFailure()));
};

export const setNotification = (params) => ({
	type: SET_NOTIFICATION,
	payload: params
});
