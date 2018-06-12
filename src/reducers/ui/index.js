import { combineReducers } from 'redux';
import advertisement from './advertisement';
import messaging from './messaging';
import login from './login';
import sidebar from './sidebar';
import titleHeader from './titleHeader';

export default combineReducers({
	advertisement,
	login,
	messaging,
	sidebar,
	titleHeader
});
