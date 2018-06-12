import { handleActions } from 'redux-actions';

import { setAdvertisementId } from '../../actions/ui/advertisement';

const initialState = {};

export default handleActions(
	{
		[setAdvertisementId]: (state, { payload }) => ({
			...state,
			id: payload
		})
	},
	initialState
);
