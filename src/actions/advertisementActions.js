import { database } from '../service/firebase';
import { SET_AD_DATA } from './actionTypes';

export const adDataSuccess = params => ({
    type: SET_AD_DATA,
    payload: params
})

export const setAdData = (params) => (dispatch) => {
    return database.ref('/ads/' + params).once('value')
    .then(
        adData => {
            adData = adData.val();
            console.log('advertisement data snapshot: ', adData);
            dispatch(adDataSuccess(adData));
        }
    )
    .catch(err => {
        console.error(err);
    });
}

