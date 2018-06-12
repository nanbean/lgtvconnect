import * as actions from '../actions/actionTypes';

const initialState = '';

export default function token (state = initialState, action) {
	switch (action.type) {
	case actions.SET_TOKEN:
		if (typeof window === 'object') {
			try {
				window.localStorage.setItem('token', action.payload);
			} catch (err) {
				// no action
			}
		}
		return action.payload;
	case actions.REHYDRATE:
		if (action.payload && action.payload.token) {
			return action.payload.token;
		}
		return state;
	default:
		return state;
	}
}
