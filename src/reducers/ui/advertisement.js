import { handleActions } from 'redux-actions';
import * as actions from '../../actions/actionTypes';

import {
	setAdvertisementId, setAdData
} from '../../actions/ui/advertisement';

const initialState = {
	ad_type: 'bbbbbb',
	channel_id: 'cccccc'
};

export function adType (state = initialState, action) {
	switch (action.type) {
	case actions.SET_AD_DATA:
		return action.payload.ad_type;
	default:
		return state;
	}
}

export default handleActions(
	{
		[setAdvertisementId]: (state, { payload }) => ({
			...state,
			id: payload
		}),
		[setAdData]: (state, { payload }) => ({
			...state,
			adData: 'xxx'
		})
	},
	initialState
);
