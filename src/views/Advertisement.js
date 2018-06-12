import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image, Embed } from 'semantic-ui-react';

import { setAdvertisementId } from '../actions/ui/advertisement';
import { requestAdData } from '../actions/advertisementActions';

class Advertisement extends Component {
	componentDidMount() {
		const { match } = this.props;
		const id = match && match.params && match.params.id;

		this.props.setAdvertisementId(id);

		//console.log('Advertisement component [componentDidMount()] id:', id);

		//get advertisement data
		this.props.requestAdData(id);
	}

	render() {
		const { adType, url, extLinkUrl, movId } = this.props;
		switch (adType) {
		case 'image':
			return (
				<div>
					<a href={`${extLinkUrl}`}>
						<Image src={`${url}`} title="외부 이미지" alt="" />
					</a>
				</div>
			);
		case 'movie':
			return <Embed id={`${movId}`} source="youtube" autoplay={true} />;
		default:
			return <p>loading...</p>;
		}
	}
}

Advertisement.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.string.isRequired
		}).isRequired
	}),
	id: PropTypes.string,
	setAdvertisementId: PropTypes.func.isRequired,
	requestAdData: PropTypes.func.isRequired,
	adType: PropTypes.string,
	url: PropTypes.string,
	extLinkUrl: PropTypes.string,
	movId: PropTypes.string
};

const mapStateToProps = state => ({
	id: state.ui.advertisement.id,
	adType: state.advertisement.adType,
	url: state.advertisement.url,
	extLinkUrl: state.advertisement.extLinkUrl,
	movId: state.advertisement.movId
});

const mapDispatchToProps = dispatch => ({
	setAdvertisementId(params) {
		dispatch(setAdvertisementId(params));
	},
	requestAdData(params) {
		dispatch(requestAdData(params));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Advertisement);
