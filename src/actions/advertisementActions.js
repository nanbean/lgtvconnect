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
            console.log('data snapshot: ', adData.val());
            dispatch(adDataSuccess(JSON.stringify(adData)));
        }
    )
    .catch(err => {
        console.error(err);
    });
}

