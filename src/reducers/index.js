import { combineReducers } from 'redux';
import ui from './ui';
import notification from './notification';
import token from './token';
import appToken from './appToken';
import emailHash from './emailHash';
import advertisement from './advertisement';

const lgtv = combineReducers({
	ui,
	notification,
	token,
	appToken,
	emailHash,
	advertisement,
});

export default lgtv;
