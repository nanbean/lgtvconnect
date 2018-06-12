import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

import Profile from '../components/Profile';

import { logout } from '../service/auth';
import { auth } from '../service/firebase';

import { setAppToken } from '../actions/appTokenActions';
import { removePermission } from '../actions/messagingActions';
import { setEmailHash } from '../actions/emailHashActions';

class MyPage extends Component {
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
			});
		this.props.removePermission();
		this.props.setEmailHash('');
	}

	render() {
		const { appToken, email, name, photo } = this.props;

		if (!appToken) {
			return <Redirect to='/' />;
		} else {
			return (
				<div className='container-full-page'>
					<Profile
						email={email}
						name={name}
						photo={photo}
					/>
					<div className='centered'>
						<Button
							content="Sign out"
							icon="google"
							align="center"
							onClick={this.handleGoogleLogout}
						/>
					</div>
				</div>
			);
		}
	}
}

MyPage.propTypes = {
	appToken: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	photo: PropTypes.string.isRequired,
	removePermission: PropTypes.func.isRequired,
	setAppToken: PropTypes.func.isRequired,
	setEmailHash: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	appToken: state.appToken,
	email: state.userInfo.email,
	name: state.userInfo.name,
	photo: state.userInfo.photo,
});

const mapDispatchToProps = dispatch => ({
	removePermission () {
		dispatch(removePermission());
	},
	setAppToken (params) {
		dispatch(setAppToken(params));
	},
	setEmailHash (params) {
		dispatch(setEmailHash(params));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MyPage);
