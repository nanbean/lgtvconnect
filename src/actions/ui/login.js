import { createActions } from 'redux-actions';

export const {
	setLoginSplash,
	setMessageDissmiss
} = createActions(
	'SET_LOGIN_SPLASH',
	'SET_MESSAGE_DISSMISS'
);
