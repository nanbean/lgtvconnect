import React from 'react';
import { Image, Header } from 'semantic-ui-react';

import lgtv from '../assets/images/lgtv.png';

const About = () => (
	<div className="container-full-page">
		<Image src={lgtv} centered size="small" />
		<Header as="h2" textAlign="center">
			<Header.Content>
				LG TV Connect
				<Header.Subheader>by future service techonlogy part</Header.Subheader>
			</Header.Content>
		</Header>
	</div>
);

export default About;
