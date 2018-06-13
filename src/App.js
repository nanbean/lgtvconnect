import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Dimmer } from 'semantic-ui-react';

import {
	About,
	Advertisement,
	Login,
	MyPage,
	Remote
} from './views';

import SidebarMenu from './components/SidebarMenu';
import TitleHeader from './components/TitleHeader';

import { rehydrate } from './actions/rehydrate';
import { toggleSidebar } from './actions/ui/sidebar';

import './App.css';

const Routing = () => (
	<Switch>
		<Route exact path="/about" component={About} />
		<Route path="/advertisement/:id" component={Advertisement} />
		<Route path="/login" component={Login}/>
		<Route exact path="/mypage" component={MyPage} />
		<Route exact path="/remote" component={Remote} />
		<Redirect from="/" to="/login"/>
	</Switch>
);

class App extends React.Component {
	constructor (props) {
		super(props);

		this.props.rehydrate();
	}

	render() {
		const { appToken, isSidebarOpen, match, title } = this.props;

		return (
			<div className="App">
				<div
					className={isSidebarOpen ? 'openSidebar' : 'closedSidebar'}
					onClick={isSidebarOpen ? toggleSidebar : undefined}
				>
					<SidebarMenu
						appToken={appToken}
						match={match}
						toggleSidebar={this.props.toggleSidebar}
					/>
					<Dimmer.Dimmable
						className="container"
						onClick={isSidebarOpen ? toggleSidebar : undefined}
					>
						<Dimmer
							active={isSidebarOpen}
							onClick={this.props.toggleSidebar}
						/>
						<TitleHeader
							title={title}
							toggleSidebar={this.props.toggleSidebar}
						/>
						<Routing />
					</Dimmer.Dimmable>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	appToken: PropTypes.string.isRequired,
	dispatch: PropTypes.func,
	isSidebarOpen: PropTypes.bool,
	match: PropTypes.shape({
		url: PropTypes.string.isRequired
	}),
	rehydrate: PropTypes.func,
	title: PropTypes.string,
	toggleSidebar: PropTypes.func
};

const mapStateToProps = state => ({
	appToken: state.appToken,
	isSidebarOpen: state.ui.sidebar.isOpen,
	title: state.ui.titleHeader.title,
	token: state.token
});

export default withRouter(connect(
	mapStateToProps,
	{
		rehydrate,
		toggleSidebar
	}
)(App));
