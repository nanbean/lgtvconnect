import { createActions } from 'redux-actions';

export const {
	setAdvertisementId,
	setAdData
} = createActions(
	'SET_ADVERTISEMENT_ID',
	'SET_AD_DATA'
);
