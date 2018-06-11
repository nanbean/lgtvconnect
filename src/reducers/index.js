import { combineReducers } from 'redux';
import ui from './ui';
import notification from './notification';
import token from './token';
import appToken from './appToken';
import emailHash from './emailHash';
import userInfo from './userInfo';

const lgtv = combineReducers({
	ui,
	notification,
	userInfo,
	token,
	appToken,
	emailHash
});

export default lgtv;
