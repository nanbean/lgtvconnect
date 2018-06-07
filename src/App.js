import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
	Home,
	Advertisement,
	Login,
	Logout
} from './views';

import { rehydrate } from './actions/rehydrate';

import './App.css';

const Routing = () => (
	<Switch>
		<Route path="/login" component={Login}/>
		<Route path="/logout" component={Logout}/>
		<Route exact path='/home' component={Home} />
		<Route path="/advertisement/:id" component={Advertisement} />
		<Redirect from="/" to="/login"/>
	</Switch>
);

class App extends React.Component {
	constructor (props) {
		super(props);

		this.props.dispatch(rehydrate());
	}

	render() {
		return (
			<div className='App'>
				<Routing />
			</div>
		);
	}
}

App.propTypes = {
	dispatch: PropTypes.func
};

export default withRouter(connect(
	null,
	null
)(App));
