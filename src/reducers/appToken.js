import * as actions from '../actions/actionTypes';

const initialState = '';

export default function appToken (state = initialState, action) {
	switch (action.type) {
	case actions.SET_APP_TOKEN:
		if (typeof window === 'object') {
			try {
				window.localStorage.setItem('appToken', action.payload);
			} catch (err) {
				// no action
			}
		}
		return action.payload;
	case actions.REHYDRATE:
		if (action.payload && action.payload.appToken) {
			return action.payload.appToken;
		}
		return state;
	default:
		return state;
	}
}
