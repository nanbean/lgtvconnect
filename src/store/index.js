import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import lgtv from '../reducers';

export default function configureStore (initialState) {
	const store = createStore(
		lgtv,
		initialState,
		applyMiddleware(thunkMiddleware) // lets us dispatch functions
	);
	console.log(store.getState());
	return store;
}
