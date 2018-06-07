import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const LoginPage = ({handleGoogleLogin}) => (
	<div>
		<h1>Login</h1>
		<div>
			<Button
				content="Sign in with Google"
				icon="google"
				onClick={handleGoogleLogin}
			/>
		</div>
	</div>
);

LoginPage.propTypes = {
	handleGoogleLogin: PropTypes.func
};

export default LoginPage;
