import { createActions } from 'redux-actions';

export const {
	resetMessagingUi,
	openMessagingModal
} = createActions(
	'RESET_MESSAGING_UI',
	'OPEN_MESSAGING_MODAL'
);
