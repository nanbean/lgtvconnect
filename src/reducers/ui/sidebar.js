import { handleActions } from 'redux-actions';
import {
	toggleSidebar
} from '../../actions/ui/sidebar';

const initialState = {
	isOpen: false
};

export default handleActions(
	{
		[toggleSidebar]: (state) => ({
			...state,
			isOpen: !state.isOpen
		})
	},
	initialState
);
