import {
	SET_APP_TOKEN
} from './actionTypes';

export const setAppToken = (params) => ({
	type: SET_APP_TOKEN,
	payload: params
});
