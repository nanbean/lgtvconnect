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
import { setUserInfo } from '../actions/userInfo';
import { requestPermission } from '../actions/messagingActions';

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
			this.props.setUserInfo(user);
			this.props.requestPermission();
			this.props.setLoginSplash(false);
		}
	}

	render() {
		const { appToken, splash, token } = this.props;

		if (appToken && token) {
			return <Redirect to='/remote' />;
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
	requestPermission: PropTypes.func.isRequired,
	splash: PropTypes.bool.isRequired,
	setAppToken: PropTypes.func.isRequired,
	setEmailHash: PropTypes.func.isRequired,
	setLoginSplash: PropTypes.func.isRequired,
	setUserInfo: PropTypes.func.isRequired,
	token: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
	appToken: state.appToken,
	splash: state.ui.login.splash,
	token: state.token
});

const mapDispatchToProps = dispatch => ({
	requestPermission () {
		dispatch(requestPermission());
	},
	setAppToken (params) {
		dispatch(setAppToken(params));
	},
	setEmailHash (params) {
		dispatch(setEmailHash(params));
	},
	setLoginSplash (params) {
		dispatch(setLoginSplash(params));
	},
	setUserInfo (params) {
		dispatch(setUserInfo(params));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
