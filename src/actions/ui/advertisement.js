import { createActions } from 'redux-actions';

export const { 
	setAdvertisementId,
	requestAdData
} = createActions(
	'SET_ADVERTISEMENT_ID',
	'SET_AD_DATA'
);
