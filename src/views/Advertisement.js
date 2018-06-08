import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setAdvertisementId, setAdData } from '../actions/ui/advertisement';
import { getAdData } from '../actions/advertisementActions';

class Advertisement extends Component {

	componentDidMount () {
		const { match } = this.props;
		const id = match && match.params && match.params.id;

		this.props.setAdvertisementId(id);

		console.log('Advertisement component [componentDidMount()] id:', id);
		
		//get advertisement data
		//let adData = getAdData(id);
		this.props.setAdData({ad_type:'type1', channel_id:'1232'});
	}

	render() {
		const { id } = this.props;
		console.log('Advertisement component [render()] id[', id, ']');
		const adData = this.props.adData;
		console.log('Advertisement component adData:', adData);
		return (
			<div>
				<div className="Home-ad">
					{`Advertisement ${id}`}
				</div>
				<div>
					{`${adData}`}
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
	id: state.ui.advertisement.id,
	adData: state.ui.adData
});

const mapDispatchToProps = dispatch => ({
	setAdvertisementId (params) {
		dispatch(setAdvertisementId(params));
	},
	setAdData(params) {
		dispatch(setAdData(params));
	},
	onReceiveAdData(params) {
		dispatch(setAdData(params));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Advertisement);
