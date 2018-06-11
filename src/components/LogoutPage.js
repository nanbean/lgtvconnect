import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const LogoutPage = ({handleGoogleLogout}) => (
	<div>
		<h1>Logout</h1>
		<div>
			<Button
				content="Sign out"
				icon="google"
				onClick={handleGoogleLogout}
			/>
		</div>
	</div>
);

LogoutPage.propTypes = {
	handleGoogleLogout: PropTypes.func
};

export default LogoutPage;
