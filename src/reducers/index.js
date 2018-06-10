import { combineReducers } from 'redux';
import ui from './ui';
import notification from './notification';
import token from './token';
import adData from './adData';

const lgtv = combineReducers({
	ui,
	notification,
	token,
	adData
});

export default lgtv;
