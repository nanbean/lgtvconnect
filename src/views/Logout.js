import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logout } from '../service/auth';
import { auth } from '../service/firebase';

import LogoutPage from '../components/LogoutPage';
import SplashScreen from '../components/SplashScreen';

import { setAppToken } from '../actions/appTokenActions';
import { setLogoutSplash } from '../actions/ui/logout';

class Logout extends Component {
	constructor (props) {
		super(props);

		auth.onAuthStateChanged(this.handleAuthStateChanged);
	}

	handleAuthStateChanged = (user) => {
		if (!user) {
			this.props.setAppToken('');
		}
	}

	handleGoogleLogout = () => {
		logout()
			.catch(function (error) {
				alert(error); // or show toast
				this.props.setLogoutSplash(false);
			});
		this.props.setLogoutSplash(true);
	}

	render() {
		const { appToken, splash } = this.props;

		if (!appToken) {
			return <Redirect to='/' />;
		} else if (splash) {
			return <SplashScreen />;
		} else {
			return <LogoutPage handleGoogleLogout={this.handleGoogleLogout}/>;
		}
	}
}

Logout.propTypes = {
	appToken: PropTypes.string.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}),
	setAppToken: PropTypes.func.isRequired,
	setLogoutSplash: PropTypes.func.isRequired,
	splash: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
	appToken: state.appToken,
	splash: state.ui.login.splash
});

const mapDispatchToProps = dispatch => ({
	setAppToken (params) {
		dispatch(setAppToken(params));
	},
	setLogoutSplash (params) {
		dispatch(setLogoutSplash(params));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Logout);
