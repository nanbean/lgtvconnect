import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import hash from 'object-hash';

import { loginWithGoogle } from '../service/auth';
import { auth } from '../service/firebase';

import LoginPage from '../components/LoginPage';
import SplashScreen from '../components/SplashScreen';

import { setAppToken } from '../actions/appTokenActions';
import { setLoginSplash } from '../actions/ui/login';
import { setEmailHash } from '../actions/emailHashActions';

class Login extends Component {
	constructor (props) {
		super(props);

		auth.onAuthStateChanged(this.handleAuthStateChanged);
	}

	handleGoogleLogin = () => {
		loginWithGoogle()
			.catch(function (error) {
				alert(error); // or show toast
				this.props.setLoginSplash(false);
			});
		this.props.setLoginSplash(true);
	}

	handleAuthStateChanged = (user) => {
		if (user) {
			this.props.setAppToken(user.uid);
			this.props.setEmailHash(hash(user.email));
			this.props.setLoginSplash(false);
		}
	}

	render() {
		const { appToken, splash } = this.props;

		if (appToken) {
			return <Redirect to='/home' />;
		} else if (splash) {
			return <SplashScreen />;
		} else {
			return <LoginPage handleGoogleLogin={this.handleGoogleLogin}/>;
		}
	}
}

Login.propTypes = {
	appToken: PropTypes.string.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}),
	splash: PropTypes.bool.isRequired,
	setAppToken: PropTypes.func.isRequired,
	setEmailHash: PropTypes.func.isRequired,
	setLoginSplash: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	appToken: state.appToken,
	splash: state.ui.login.splash
});

const mapDispatchToProps = dispatch => ({
	setAppToken (params) {
		dispatch(setAppToken(params));
	},
	setEmailHash (params) {
		dispatch(setEmailHash(params));
	},
	setLoginSplash (params) {
		dispatch(setLoginSplash(params));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
