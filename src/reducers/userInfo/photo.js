import * as actions from '../../actions/actionTypes';

const initialState = '';

export default function photo (state = initialState, action) {
	switch (action.type) {
	case actions.SET_USER_INFO:
		if (action.payload.photoURL) {
			if (typeof window === 'object') {
				try {
					window.localStorage.setItem('photo', action.payload.photoURL);
				} catch (err) {
					// no action
				}
			}
			return action.payload.photoURL;
		}
		return state;
	case actions.REHYDRATE:
		if (action.payload && action.payload.photo) {
			return action.payload.photo;
		}
		return state;
	default:
		return state;
	}
}
