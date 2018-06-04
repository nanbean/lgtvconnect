import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const Notification = props => (
	<Message>
		<Message.Header>{props.title}</Message.Header>
		<p>
			{props.body}
		</p>
	</Message>
);

Notification.propTypes = {
	body: PropTypes.string,
	title: PropTypes.string
};

export default Notification;
