import {
	REHYDRATE
} from './actionTypes';

export const rehydrate = () => {
	const payload = {};

	if (typeof window === 'object') {
		try {
			const appToken = window.localStorage.getItem('appToken');
			payload.appToken = appToken;
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
