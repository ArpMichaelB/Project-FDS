import React, { Component } from "react";
import { Card, Modal, Icon } from "antd";

import "./style.css";

class Gallery extends Component {
	constructor(props){
		super(props);

		this.state={visible:false, image:"", width:"", index:0};

		this.image_num = 2;

		this.cancel=this.cancel.bind(this);
		this.showModal=this.showModal.bind(this);
		this.goLeft=this.goLeft.bind(this);
		this.goRight=this.goRight.bind(this);
	}

	render(){
		let cards = [];
		for(let i = 0;i < this.image_num;i++){
			cards.push(
				<Card
					hoverable
					key={i}
					bodyStyle={{padding: "0"}}
					className="cards"
					onClick={() => this.showModal("/gallery/gallery-image-" + i + ".png", i)}
					cover={<img alt="example" className="small_image" src={"/gallery/gallery-image-" + i + ".png"} />}
				/>
			);
		}
		
		return (
			<main className="Gallery">
				<div className="title"><h1>Gallery</h1></div>
				{cards.map(card => card)}
				<Modal visible={this.state.visible} id="modal" onCancel={this.cancel} bodyStyle={{padding:"0"}} 
					footer={null}>
					<div>
						<Icon type="caret-left" theme="filled" className="icon" id="left-icon" onClick={this.goLeft} />
						<img alt="example" id="modal-img" src={this.state.image} />
						<Icon type="caret-right" theme="filled" className="icon" id="right-icon" onClick={this.goRight} />
					</div>
				</Modal>
			</main>
		);
	}

	goLeft(){
		if(this.state.index > 0){
			this.setState({image:"/gallery/gallery-image-" + (this.state.index-1) + ".png", index:this.state.index-1});
		}
	}

	goRight(){
		if(this.state.index < this.image_num-1){
			this.setState({image:"/gallery/gallery-image-" + (this.state.index+1) + ".png", index:this.state.index+1});
		}
	}

	cancel(){
		this.setState({visible:false});
	}

	showModal(image, index){
		this.setState({visible:true, image:image, index:index});
	}
}

export default Gallery;