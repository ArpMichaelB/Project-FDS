import React, { Component } from "react";
import { Pagination } from "antd";
import Card from "antd/lib/card";
import { PropTypes } from "prop-types";



export default class Slideshow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			minValue: 0,
			maxValue: 3,
			currentPage: 1
		};

		let data = [];

		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", "/gallery/YandJ/images_info.txt", false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status === 0) {
					var allText = rawFile.responseText;
					this.images = allText.split("\n");
				}
			}
		};

		rawFile.send(null);

		for (var i = 0; i < this.images.length; i++) {
			if(this.images[i].includes(props.fileStart)){
				data.push({value: "/gallery/YandJ/" + this.images[i] });
			}
			
		}

		this.state.data = data;
		
	}

	handleChange = value => {
		if (value <= 1) {
			this.setState({
				minValue: 0,
				maxValue: 3,
				currentPage: value
			});
		} else if (value === this.state.currentPage - 1) {
			this.setState({
				minValue: this.state.minValue - 3,
				maxValue: value * 3,
				currentPage: value
			});
		} else if (
			value > this.state.currentPage + 1 ||
			value < this.state.currentPage - 1
		) {
			this.setState({
				minValue: value * 3 - 3,
				maxValue: value * 3,
				currentPage: value
			});

		}
		else {
			this.setState({
				minValue: this.state.maxValue,
				maxValue: value * 3,
				currentPage: value
			});
		}
	};



	render() {
		
		return (
			<div>
				<div className="picture_display">
					{this.state.data &&
						this.state.data.length > 0 &&
						this.state.data.slice(this.state.minValue, this.state.maxValue).map(val => (

							<Card
								className="ant-card-bordered-geo"
								style={{ width: "100%" }}
								key={val.value}
								cover={<img alt={val.value} src={val.value} className="card_images"/>}
							>
							</Card>

						))}

				</div>
				<Pagination
					defaultCurrent={1}
					defaultPageSize={3}
					onChange={this.handleChange}
					total={this.state.data.length}
				/>
			</div>
		);
	}
}

Slideshow.propTypes = {
	fileStart: PropTypes.any,
};


