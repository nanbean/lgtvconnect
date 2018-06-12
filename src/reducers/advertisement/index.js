import { combineReducers } from 'redux';
import adType from './adType';
import url from './url';
import extLinkUrl from './extLinkUrl';
import movId from './movId';

export default combineReducers({
	adType,
	url,
	extLinkUrl,
	movId
});
