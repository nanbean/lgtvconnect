import { handleActions } from 'redux-actions';
import {
	setLoginSplash,
	setMessageDissmiss
} from '../../actions/ui/login';

const initialState = {
	splash: false
};

export default handleActions(
	{
		[setLoginSplash]: (state, { payload }) => ({
			...state,
			splash: payload
		}),
		[setMessageDissmiss]: (state, { payload }) => ({
			...state,
			messageDissmiss: payload
		})
	},
	initialState
);
