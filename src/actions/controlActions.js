import moment from 'moment';

import { database } from '../service/firebase';

export const callKeyCode = (keyCode, ) => (dispatch, getState) => {
	const state = getState();
	const { emailHash } = state;
	if (keyCode) {
		var controlRef = database.ref(`users/${emailHash}/control`);
		controlRef.set({
			keyCode: keyCode,
			timeStamp: moment().format('YYYY-MM-DD-HH:mm:ss')
		});
	}
};
