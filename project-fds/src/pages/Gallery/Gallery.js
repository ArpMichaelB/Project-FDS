import React, { Component } from "react";
import { Card, Modal, Icon } from "antd";

import "./style.css";

class Gallery extends Component {
	constructor(props){
		super(props);

		this.state={visible:false, image:"", width:"", index:0};

		this.pictures = ["gallery_placeholder_300.png", "gallery_placeholder_640.png", "gallery_placeholder_300.png", "gallery_placeholder_640.png"];

		this.cancel=this.cancel.bind(this);
		this.showModal=this.showModal.bind(this);
		this.changeWidth=this.changeWidth.bind(this);
		this.goLeft=this.goLeft.bind(this);
		this.goRight=this.goRight.bind(this);
	}

	render(){
		return (
			<main className="Gallery">
				{this.pictures.map((image, index) => {

					return(
						<Card
							hoverable
							key={index}
							bodyStyle={{padding: "0"}}
							className="cards"
							onClick={() => this.showModal(image, index)}
							cover={<img alt="example" className="small_image" src={image} />}
						>
						</Card>
					);
				})}
				<Modal visible={this.state.visible} onCancel={this.cancel} width={this.state.width + 110} footer={null}>
					<div onLoad={this.changeWidth}>
						<Icon type="caret-left" theme="filled" className="icon" onClick={this.goLeft} />
						<img alt="example" src={this.state.image} />
						<Icon type="caret-right" theme="filled" className="icon" onClick={this.goRight} />
					</div>
				</Modal>
			</main>
		);
	}

	goLeft(){
		if(this.state.index > 0){
			this.setState({image:this.pictures[this.state.index-1], index:this.state.index-1});
		}
	}

	goRight(){
		if(this.state.index < this.pictures.length-1){
			this.setState({image:this.pictures[this.state.index+1], index:this.state.index+1});
		}
	}

	changeWidth({target:div}){
		this.setState({width:div.width + 10});
	}

	cancel(){
		this.setState({visible:false});
	}

	showModal(image, index){
		this.setState({visible:true, image:image, index:index});
	}
}

export default Gallery;