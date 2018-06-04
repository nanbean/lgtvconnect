import * as actions from '../../actions/actionTypes';

const initialState = '';

export default function title (state = initialState, action) {
	switch (action.type) {
	case actions.SET_NOTIFICATION:
		return action.payload.title;
	default:
		return state;
	}
}
