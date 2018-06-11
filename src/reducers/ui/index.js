import { combineReducers } from 'redux';
import advertisement from './advertisement';
import messaging from './messaging';
import login from './login';

export default combineReducers({
	advertisement,
	messaging,
	login
});
