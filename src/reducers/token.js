import * as actions from '../actions/actionTypes';

const initialState = '';

export default function token (state = initialState, action) {
	switch (action.type) {
	case actions.SET_TOKEN:
		return action.payload;
	default:
		return state;
	}
}
