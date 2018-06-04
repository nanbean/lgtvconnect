import * as actions from '../../actions/actionTypes';

const initialState = '';

export default function body (state = initialState, action) {
	switch (action.type) {
	case actions.SET_NOTIFICATION:
		return action.payload.body;
	default:
		return state;
	}
}
