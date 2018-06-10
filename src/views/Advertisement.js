import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setAdvertisementId } from '../actions/ui/advertisement';
import { setAdData } from '../actions/advertisementActions';

class Advertisement extends Component {

	componentDidMount () {
		const { match } = this.props;
		const id = match && match.params && match.params.id;

		this.props.setAdvertisementId(id);

		console.log('Advertisement component [componentDidMount()] id:', id);
		
		//get advertisement data
		this.props.setAdData(id);

	}

	render() {
		const { id } = this.props;
		const { adData } = this.props;
		return (
			<div>
				<div className="Home-ad">
					{`Advertisement ID[${id}]`}
				</div>
				<div>
					Ad Data: {`${adData}`}
				</div>
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
	id: PropTypes.string
};

const mapStateToProps = state => ({
	id: state.ui.advertisement.id
	,adData: state.ui.advertisement
	,adData: state.adData
});

const mapDispatchToProps = dispatch => ({
	setAdvertisementId (params) {
		dispatch(setAdvertisementId(params));
	},
	setAdData(params) {
		dispatch(setAdData(params));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Advertisement);
