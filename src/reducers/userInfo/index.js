import { combineReducers } from 'redux';
import email from './email';
import photo from './photo';
import name from './name';

export default combineReducers({
	email,
	photo,
	name
});
