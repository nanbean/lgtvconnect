import { handleActions } from 'redux-actions';
import {
	setLoginSplash
} from '../../actions/ui/login';

const initialState = {
	splash: false
};

export default handleActions(
	{
		[setLoginSplash]: (state, { payload }) => ({
			...state,
			splash: payload
		})
	},
	initialState
);
