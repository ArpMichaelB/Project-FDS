import React, { Component } from "react";
import { Carousel } from "antd";
import BuildingPic from "../../assets/RBuildingPic.jpg";
export default class Slideshow extends Component {
	render() {
		return (
			<Carousel>
				<div><img className="slick-image" src={BuildingPic} alt="Building"/></div>
				<div><img className="slick-image" src={BuildingPic} alt="Building"/></div>
				<div><img className="slick-image" src={BuildingPic} alt="Building"/></div>
				<div><img className="slick-image" src={BuildingPic} alt="Building"/></div>
			</Carousel>

		);
	}
}

