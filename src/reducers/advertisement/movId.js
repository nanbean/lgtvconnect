import * as actions from '../../actions/actionTypes';

const initialState = '';

export default function adType(state = initialState, action) {
	switch (action.type) {
	case actions.SET_AD_DATA:
		if (action.payload.movId) {
			return action.payload.movId;
		}
		return state;
	default:
		return state;
	}
}
