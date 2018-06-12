import { handleActions } from 'redux-actions';
import {
	setTitleHeaderTitle
} from '../../actions/ui/titleHeader';

const initialState = {
	title: ''
};

export default handleActions(
	{
		[setTitleHeaderTitle]: (state, { payload }) => ({
			...state,
			title: payload
		})
	},
	initialState
);
