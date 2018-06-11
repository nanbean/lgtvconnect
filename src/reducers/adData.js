import * as actions from '../actions/actionTypes';

const initialState = {url:''};

export default function adData (state = initialState, action) {
	switch (action.type) {
    case actions.SET_AD_DATA:
        return action.payload;
	default:
		return state;
	}
}