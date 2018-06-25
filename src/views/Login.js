import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import hash from 'object-hash';
import { Button, Dimmer, Loader, Message } from 'semantic-ui-react';

import { loginWithGoogle } from '../service/auth';
import { auth } from '../service/firebase';

import { setAppToken } from '../actions/appTokenActions';
import { setLoginSplash, setMessageDissmiss } from '../actions/ui/login';
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
		const { appToken } = this.props;
		if (user && user.uid !== appToken) {
			this.props.setAppToken(user.uid);
			this.props.setEmailHash(hash(user.email));
			this.props.setUserInfo(user);
			this.props.requestPermission();
			this.props.setLoginSplash(false);
		}
	}

	handleMessageDismiss = () => {
		this.props.setMessageDissmiss(true);
	}

	render() {
		const { appToken, messageDissmiss, splash, token } = this.props;

		if (appToken && token) {
			return <Redirect to="/remote" />;
		} else {
			return (
				<div className="container-full-page">
					<Dimmer active={splash}>
						<Loader inverted content="Loading" />
					</Dimmer>
					<div className="centered">
						{
							!messageDissmiss &&
							<div className="message">
								<Message
									onDismiss={this.handleMessageDismiss}
								>
									<Message.Header>Google 계정으로 로그인해주세요.</Message.Header>
									<Message.List items=
										{
											[
												'LG TV Connect 로 TV 를 제어하고, TV에서 유용한 소식들을 받을 수 있습니다.',
												'원활한 LG TV Connect 사용을 위해서는 Google 계정 로그인이 필요합니다.',
												'TV에서도 동일한 Google 계정으로 로그인하기를 사용하세요.'
											]
										}
									/>
								</Message>
							</div>
						}
						<Button
							content="Sign in with Google"
							icon="google"
							onClick={this.handleGoogleLogin}
						/>
					</div>
				</div>
			);
		}
	}
}

Login.propTypes = {
	appToken: PropTypes.string.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	messageDissmiss: PropTypes.bool.isRequired,
	requestPermission: PropTypes.func.isRequired,
	setAppToken: PropTypes.func.isRequired,
	setEmailHash: PropTypes.func.isRequired,
	setLoginSplash: PropTypes.func.isRequired,
	setMessageDissmiss: PropTypes.func.isRequired,
	setUserInfo: PropTypes.func.isRequired,
	splash: PropTypes.bool.isRequired,
	token: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
	appToken: state.appToken,
	messageDissmiss: state.ui.login.messageDissmiss,
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
	setMessageDissmiss (params) {
		dispatch(setMessageDissmiss(params));
	},
	setUserInfo (params) {
		dispatch(setUserInfo(params));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
