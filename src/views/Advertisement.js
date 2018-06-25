import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Message, Embed, Image } from 'semantic-ui-react';

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
		const { adType, url, extLinkUrl, movId, placeholderImage } = this.props;
		switch (adType) {
		case 'image':
			return (
				<div className="container-full-page">
					<a href={`${extLinkUrl}`}>
						<Image src={`${url}`} title="외부 이미지" alt="" />
					</a>
					<br />
					<div className="centered">
						<Message compact>
							이미지를 클릭하면 상세 페이지로 이동합니다.
						</Message>
					</div>
				</div>
			);
		case 'movie':
			return (
				<div className="container-full-page">
					<Embed
						id={`${movId}`}
						source="youtube"
						active
						autoplay
						hd
						placeholder={`${placeholderImage}`}
					/>
				</div>
			);
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
	}).isRequired,
	requestAdData: PropTypes.func.isRequired,
	setAdvertisementId: PropTypes.func.isRequired,
	adType: PropTypes.string,
	extLinkUrl: PropTypes.string,
	id: PropTypes.string,
	movId: PropTypes.string,
	placeholderImage: PropTypes.string,
	url: PropTypes.string
};

const mapStateToProps = state => ({
	id: state.ui.advertisement.id,
	adType: state.advertisement.adType,
	url: state.advertisement.url,
	extLinkUrl: state.advertisement.extLinkUrl,
	movId: state.advertisement.movId,
	placeholderImage: state.advertisement.placeholderImage
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
