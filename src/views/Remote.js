import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Icon, Grid } from 'semantic-ui-react';

import { callKeyCode } from '../actions/controlActions';

class Remote extends Component {
	handleClick = (ev, props) => {
		const { keyCode } = props;
		this.props.callKeyCode(keyCode);
	}

	render() {
		return (
			<div className='container-full-page'>
				<div className='remote'>
					<Grid>
						<Grid.Row columns={3}>
							<Grid.Column>
								<Button
									icon
									size="massive"
									keyCode="IR_KEY_CH_UP"
									onClick={this.handleClick}
								>
									<Icon name='angle up' />
								</Button>
							</Grid.Column>
							<Grid.Column>

							</Grid.Column>
							<Grid.Column>
								<Button
									icon
									size="massive"
									keyCode="IR_KEY_VOL_UP"
									onClick={this.handleClick}
								>
									<Icon name='volume up' />
								</Button>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row columns={3}>
							<Grid.Column>
								<Button
									icon
									size="massive"
									keyCode="IR_KEY_CH_DOWN"
									onClick={this.handleClick}
								>
									<Icon name='angle down' />
								</Button>
							</Grid.Column>
							<Grid.Column>

							</Grid.Column>
							<Grid.Column>
								<Button
									icon
									size="massive"
									keyCode="IR_KEY_VOL_DOWN"
									onClick={this.handleClick}
								>
									<Icon name='volume down' />
								</Button>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row columns={3}>
							<Grid.Column>
								<Button
									icon
									size="massive"
									keyCode="IR_KEY_HOME"
									onClick={this.handleClick}
								>
									<Icon name='home' />
								</Button>
							</Grid.Column>
							<Grid.Column>
								<Button
									icon
									size="massive"
									keyCode="IR_KEY_PLAY"
									onClick={this.handleClick}
								>
									<Icon name='play' />
								</Button>
							</Grid.Column>
							<Grid.Column>
								<Button
									icon
									size="massive"
									keyCode="IR_KEY_PAUSE"
									onClick={this.handleClick}
								>
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

Remote.propTypes = {
	callKeyCode: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
	callKeyCode (params) {
		dispatch(callKeyCode(params));
	}
});

export default connect(
	null,
	mapDispatchToProps
)(Remote);
