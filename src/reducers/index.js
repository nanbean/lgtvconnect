import { combineReducers } from 'redux';
import ui from './ui';
import notification from './notification';
import token from './token';

const lgtv = combineReducers({
	ui,
	notification,
	token
});

export default lgtv;
