import {
	SET_USER_INFO
} from './actionTypes';

export const setUserInfo = (params) => ({
	type: SET_USER_INFO,
	payload: params
});
