import { handleActions } from 'redux-actions';
import {
	setLogoutSplash
} from '../../actions/ui/logout';

const initialState = {
	splash: false
};

export default handleActions(
	{
		[setLogoutSplash]: (state, { payload }) => ({
			...state,
			splash: payload
		})
	},
	initialState
);
