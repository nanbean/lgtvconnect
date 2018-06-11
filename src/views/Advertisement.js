import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Embed } from 'semantic-ui-react'

import { setAdvertisementId } from '../actions/ui/advertisement';
import { setAdData } from '../actions/advertisementActions';

class Advertisement extends Component {

	componentWillMount () {
		const { match } = this.props;
		const id = match && match.params && match.params.id;

		this.props.setAdvertisementId(id);

		console.log('Advertisement component [componentDidMount()] id:', id);
		
		//get advertisement data
		this.props.setAdData(id);

	}

	render() {
		const { adData } = this.props;
		switch(adData.ad_type) {
			case 'image':
				return (
					<div>
						<a href={`${adData.ext_link_url}`} className="ui image">
							<img src={`${adData.url}`} title="외부 이미지" alt="">
							</img>
						</a>
					</div>					
				);
			case 'movie':
				return (
					<Embed id={`${adData.mov_id}`} source='youtube' autoplay={true}></Embed>			
				);
			default:
				return (
					<div>
						loading...
					</div>
				);
		}

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
