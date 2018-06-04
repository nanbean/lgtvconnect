import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import {
	Home,
	Advertisement
} from './views';

import './App.css';

const Routing = () => (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route path="/advertisement/:id" component={Advertisement} />
	</Switch>
);

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Routing />
			</div>
		);
	}
}

export default withRouter(connect(
	null,
	null
)(App));
