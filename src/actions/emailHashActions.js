import {
	SET_EMAIL_HASH
} from './actionTypes';

export const setEmailHash = (params) => ({
	type: SET_EMAIL_HASH,
	payload: params
});
