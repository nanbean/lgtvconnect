import { combineReducers } from 'redux';
import ui from './ui';
import notification from './notification';
import token from './token';
import appToken from './appToken';
import emailHash from './emailHash';

const lgtv = combineReducers({
	ui,
	notification,
	token,
	appToken,
	emailHash
});

export default lgtv;
