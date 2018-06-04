import { handleActions } from 'redux-actions';
import {
	resetMessagingUi,
	openMessagingModal
} from '../../actions/ui/messaging';

const initialState = {
	isModalOpen: false
};

export default handleActions(
	{
		[resetMessagingUi]: () => ({
			...initialState
		}),
		[openMessagingModal]: (state, { payload }) => ({
			...state,
			...payload,
			isModalOpen: true
		})
	},
	initialState
);
