import * as actions from '../../actions/actionTypes';

const initialState = '';

export default function url(state = initialState, action) {
	switch (action.type) {
	case actions.SET_AD_DATA:
		if (action.payload.url) {
			return action.payload.url;
		}
		return state;
	default:
		return state;
	}
}
