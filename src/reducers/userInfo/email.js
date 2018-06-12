import * as actions from '../../actions/actionTypes';

const initialState = '';

export default function email (state = initialState, action) {
	switch (action.type) {
	case actions.SET_USER_INFO:
		if (action.payload.email) {
			if (typeof window === 'object') {
				try {
					window.localStorage.setItem('email', action.payload.email);
				} catch (err) {
					// no action
				}
			}
			return action.payload.email;
		}
		return state;
	case actions.REHYDRATE:
		if (action.payload && action.payload.email) {
			return action.payload.email;
		}
		return state;
	default:
		return state;
	}
}
