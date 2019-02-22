import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";

class ImageModalGallery extends Component {

	static propTypes = {
		gallery_images:PropTypes.array,
		index:PropTypes.number
	}

	componentDidMount(){
		this.imageGallery.slideToIndex(this.props.index);
	}

	componentDidUpdate(){
		this.imageGallery.slideToIndex(this.props.index);
	}

	render(){
		return(
			<ImageGallery ref={i => this.imageGallery = i} items={this.props.gallery_images} lazyLoad={true} showBullets={false} showThumbnails={false} showPlayButton={false} />
		);
	}

}

export default ImageModalGallery;