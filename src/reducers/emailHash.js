import * as actions from '../actions/actionTypes';

const initialState = '';

export default function emailHash (state = initialState, action) {
	switch (action.type) {
	case actions.SET_EMAIL_HASH:
		if (typeof window === 'object') {
			try {
				window.localStorage.setItem('emailHash', action.payload);
			} catch (err) {
				// no action
			}
		}
		return action.payload;
	case actions.REHYDRATE:
		if (action.payload && action.payload.emailHash) {
			return action.payload.emailHash;
		}
		return state;
	default:
		return state;
	}
}
