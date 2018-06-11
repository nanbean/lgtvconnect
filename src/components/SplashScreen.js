import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const SplashScreen = () => (
	<div>
		<div className='container-full-page'>
			<div className='loading'>
				<Dimmer active>
					<Loader inverted content='Loading' />
				</Dimmer>
			</div>
		</div>
	</div>
);

export default SplashScreen;
