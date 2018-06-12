import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Grid } from 'semantic-ui-react';

class Remote extends Component {
	render() {
		return (
			<div className='container-full-page'>
				<div className='remote'>
					<Grid>
						<Grid.Row columns={3}>
							<Grid.Column>
								<Button icon size="massive">
									<Icon name='angle up' />
								</Button>
							</Grid.Column>
							<Grid.Column>

							</Grid.Column>
							<Grid.Column>
								<Button icon size="massive">
									<Icon name='volume up' />
								</Button>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row columns={3}>
							<Grid.Column>
								<Button icon size="massive">
									<Icon name='angle down' />
								</Button>
							</Grid.Column>
							<Grid.Column>

							</Grid.Column>
							<Grid.Column>
								<Button icon size="massive">
									<Icon name='volume down' />
								</Button>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row columns={3}>
							<Grid.Column>
								<Button icon size="massive">
									<Icon name='home' />
								</Button>
							</Grid.Column>
							<Grid.Column>
								<Button icon size="massive">
									<Icon name='play' />
								</Button>
							</Grid.Column>
							<Grid.Column>
								<Button icon size="massive">
									<Icon name='pause' />
								</Button>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</div>
		);
	}
}

export default connect(
	null,
	null
)(Remote);
