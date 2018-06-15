import { combineReducers } from 'redux';
import adType from './adType';
import url from './url';
import extLinkUrl from './extLinkUrl';
import movId from './movId';
import placeholderImage from './placeholderImage';

export default combineReducers({
	adType,
	url,
	extLinkUrl,
	movId,
	placeholderImage
});
