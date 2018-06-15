import * as actions from '../../actions/actionTypes';

const initialState = '';

export default function placeholderImage(state = initialState, action) {
	switch (action.type) {
	case actions.SET_AD_DATA:
		if (action.payload.placeholderImage) {
			return action.payload.placeholderImage;
		}
		return state;
	default:
		return state;
	}
}
