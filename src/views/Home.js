import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { messaging } from '../service/firebase';

import Notification from '../components/Notification';

import { requestPermission, removePermission, setNotification } from '../actions/messagingActions';

class Home extends Component {
	constructor (props) {
		super(props);

		messaging.onMessage(this.handleMessage);
	}

	handleMessage = (payload) => {
		this.props.setNotification(payload.notification);
	}

	registerClick = () => {
		this.props.requestPermission();
	}

	unregisterClick = () => {
		this.props.removePermission();
	}

	render() {
		const {title, body} = this.props;

		return (
			<div className="Home">
				<div>
					<Button
						content='Register Messaging'
						icon='plus'
						labelPosition='left'
						onClick={this.registerClick}
					/>
					<Button
						content='Unregister Messaging'
						icon='minus'
						labelPosition='left'
						onClick={this.unregisterClick}
					/>
					<div>
						{this.props.token}
					</div>
					<Notification
						title={title}
						body={body}
					/>
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	body: PropTypes.string,
	title: PropTypes.string,
	token: PropTypes.string.isRequired,
	removePermission: PropTypes.func.isRequired,
	requestPermission: PropTypes.func.isRequired,
	setNotification: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	body: state.notification.body,
	title: state.notification.title,
	token: state.token
});

const mapDispatchToProps = dispatch => ({
	removePermission () {
		dispatch(removePermission());
	},
	requestPermission () {
		dispatch(requestPermission());
	},
	setNotification (params) {
		dispatch(setNotification(params));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
