import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setAdvertisementId } from '../actions/ui/advertisement';

class Advertisement extends Component {
	componentDidMount () {
		const { match } = this.props;
		const id = match && match.params && match.params.id;

		this.props.setAdvertisementId(id);
	}

	render() {
		const { id } = this.props;

		return (
			<div className="Home">
				{`Advertisement ${id}`}
			</div>
		);
	}
}

Advertisement.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string.isRequired,
		}).isRequired
	}),
	id: PropTypes.string,
	setAdvertisementId: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	id: state.ui.advertisement.id
});

const mapDispatchToProps = dispatch => ({
	setAdvertisementId (params) {
		dispatch(setAdvertisementId(params));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Advertisement);
