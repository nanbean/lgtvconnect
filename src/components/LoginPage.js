import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const Login = ({handleGoogleLogin}) => (
	<div>
		<div className='container-full-page'>
			<div className='centered'>
				<Button
					content="Sign in with Google"
					icon="google"
					onClick={handleGoogleLogin}
				/>
			</div>
		</div>
	</div>
);

Login.propTypes = {
	handleGoogleLogin: PropTypes.func
};

export default Login;
