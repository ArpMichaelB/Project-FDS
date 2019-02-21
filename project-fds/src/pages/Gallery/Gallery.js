import React, { Component } from "react";
import { Card, Modal, Icon  } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.css";

class Gallery extends Component {
	constructor(props){
		super(props);

		this.state={visible:false, image:"", width:"", index:0, scoll_index:10, hasMore:true};

		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", "/gallery/YandJ/images_info.txt", false);
		rawFile.onreadystatechange = () =>
		{
			if(rawFile.readyState === 4)
			{
				if(rawFile.status === 200 || rawFile.status === 0)
				{
					var allText = rawFile.responseText;
					this.images = allText.split("\n");
				}
			}
		};
		rawFile.send(null);

		let cards = [];
		for(let i = this.state.scoll_index-10;i < this.state.scoll_index;i++){
			cards.push(
				<Card
					hoverable
					key={i}
					bodyStyle={{padding: "0"}}
					className="cards"
					onClick={() => this.showModal("/gallery/YandJ/" + this.images[i], i)}
					cover={<img alt="example" className="small_image" src={"/gallery/YandJ/" + this.images[i]} />}
				/>
			);
		}

		this.state.cards = cards;

		this.cancel=this.cancel.bind(this);
		this.showModal=this.showModal.bind(this);
		this.goLeft=this.goLeft.bind(this);
		this.goRight=this.goRight.bind(this);
	}

	render(){
		
		return (
			<main className="Gallery">
				<div className="title"><h1>Gallery</h1></div>
				<InfiniteScroll
					dataLength={this.state.cards.length}
					next={this.loadFunc}
					hasMore={this.state.hasMore}
					loader={<h4>Loading ...</h4>}
				>
					{this.state.cards}
				</InfiniteScroll>
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

	loadFunc = () => {

		if(this.state.scoll_index === this.images.length){
			this.setState({hasMore:false});
			return;
		}
		
		let scoll_index = this.state.scoll_index + 10;
		if(scoll_index >= this.images.length){
			scoll_index = this.images.length;
		}

		let cards = [];
		for(let i = scoll_index-10;i < scoll_index;i++){
			cards.push(
				<Card
					hoverable
					key={i}
					bodyStyle={{padding: "0"}}
					className="cards"
					onClick={() => this.showModal("/gallery/YandJ/" + this.images[i], i)}
					cover={<img alt="example" className="small_image" src={"/gallery/YandJ/" + this.images[i]} />}
				/>
			);
		}
		this.setState((prevState) => {return {scoll_index:scoll_index, cards:prevState.cards.concat(cards)};});
	}

	goLeft(){
		if(this.state.index > 0){
			this.setState({image:"/gallery/YandJ/" + this.images[this.state.index-1], index:this.state.index-1});
		}
	}

	goRight(){
		if(this.state.index < this.images.length-1){
			this.setState({image:"/gallery/YandJ/" + this.images[this.state.index+1], index:this.state.index+1});
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