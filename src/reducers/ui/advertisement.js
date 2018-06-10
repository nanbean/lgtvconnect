import { handleActions } from 'redux-actions';


import {
	setAdvertisementId, setAdData
} from '../../actions/ui/advertisement';

const initialState = {};

export default handleActions(
	{
		[setAdvertisementId]: (state, { payload }) => ({
			...state,
			id: payload
		}),
		[setAdData]: (state, { payload }) => ({
			...state,
			adData: payload
		})
	},
	initialState
);
