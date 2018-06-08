import { database } from '../service/firebase';
import { SET_AD_DATA } from './actionTypes';

export const setAdData = data => ({
	type: SET_AD_DATA,
	payload: data
});

export const getAdData = (params) => (dispatch) => {
    console.log('getAdData params[', params, ']');

	return database.ref('/ads/' + params).once('value')
		.then(
            adData => {
                console.log('data snapshot: ', adData.val());
                dispatch(setAdData(adData));
            }
        )
		.catch(err => {
            console.error(err);
        });
};

