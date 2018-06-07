import * as actions from '../actions/actionTypes';

const initialState = '';

export default function emailHash (state = initialState, action) {
	switch (action.type) {
	case actions.SET_EMAIL_HASH:
		return action.payload;
	default:
		return state;
	}
}
