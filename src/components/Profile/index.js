import React from 'react';
import PropTypes from 'prop-types';
import { Header, Image } from 'semantic-ui-react';

import './index.css';

const Profile = ({
	name,
	photo
}) => (
	<div className="profile">
		<Header as="h2" textAlign="center">
			<Image circular src={photo} /> {name}
		</Header>
	</div>
);

Profile.propTypes = {
	name: PropTypes.string,
	photo: PropTypes.string
};

export default Profile;
