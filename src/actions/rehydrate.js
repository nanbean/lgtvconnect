import {
	REHYDRATE
} from './actionTypes';

export const rehydrate = () => {
	const payload = {};

	if (typeof window === 'object') {
		try {
			const token = window.localStorage.getItem('token');
			payload.token = token;
			const appToken = window.localStorage.getItem('appToken');
			payload.appToken = appToken;
			const emailHash = window.localStorage.getItem('emailHash');
			payload.emailHash = emailHash;
			const email = window.localStorage.getItem('email');
			payload.email = email;
			const name = window.localStorage.getItem('name');
			payload.name = name;
			const photo = window.localStorage.getItem('photo');
			payload.photo = photo;
		} catch (err) {
			// do nothing
		}
	} else {
		// do nothing
	}
	return {
		type: REHYDRATE,
		payload
	};
};
