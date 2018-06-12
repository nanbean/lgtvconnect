import * as actions from '../../actions/actionTypes';

const initialState = '';

export default function name (state = initialState, action) {
	switch (action.type) {
	case actions.SET_USER_INFO:
		if (action.payload.displayName) {
			if (typeof window === 'object') {
				try {
					window.localStorage.setItem('name', action.payload.displayName);
				} catch (err) {
					// no action
				}
			}
			return action.payload.displayName;
		}
		return state;
	case actions.REHYDRATE:
		if (action.payload && action.payload.name) {
			return action.payload.name;
		}
		return state;
	default:
		return state;
	}
}
