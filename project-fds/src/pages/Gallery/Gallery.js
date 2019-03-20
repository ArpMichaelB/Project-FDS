import React, { Component } from "react";
import { Card, Modal  } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyLoad from "react-lazyload";
import ImageModalGallery from "./ImageModalGallery";
import DocumentTitle from "react-document-title";

import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css";

class Gallery extends Component {
	constructor(props){
		super(props);

		this.initialLoad = true;
		this.imagesLoading = true;
		this.lastLocation = "";
		this.images = [];

		this.state={visible:false, width:"", index:0, scoll_index:0, hasMore:true, h3_display:"Loading ...", cards:[]};

		this.cancel=this.cancel.bind(this);
		this.showModal=this.showModal.bind(this);

		fetch("https://shr4ny5edi.execute-api.us-east-1.amazonaws.com/default/image?operation=readAll")
			.then(response => response.json())
			.then(data => {
				this.images = JSON.parse(data.body);

				let scoll_index = this.state.scoll_index + 10;
				if(scoll_index >= this.images.length){
					scoll_index = this.images.length;
				}

				let start = this.state.scoll_index;
		
				let cards = [];
				for(let i = start;i < scoll_index;i++){
					if(this.images[i].sitelocation.toLowerCase() !== this.lastLocation){
						this.lastLocation = this.images[i].sitelocation.toLowerCase();
						cards.push(<div key={this.lastLocation} className="title"><h2>{this.lastLocation.charAt(0).toUpperCase() + this.lastLocation.slice(1)}</h2></div>);
					}
					cards.push(
						<Card
							hoverable
							key={this.images[i].id}
							bodyStyle={{padding: "0"}}
							className="cards"
							onClick={() => this.showModal(i)}
							cover={
								<LazyLoad placeholder={<img alt="placeholder" className="small_image" src="/gallery/loading_image.gif" />}>
									<img alt={this.images[i].alt} className="small_image" src={"https://s3.amazonaws.com/fdsimagebucket/" + this.images[i].link} />
								</LazyLoad>
							}
						/>
					);
				}

				this.gallery_images = [];

				this.images.forEach(image => {
					this.gallery_images.push({original:"https://s3.amazonaws.com/fdsimagebucket/" + image.link, 
						originalClass:"gallery_image", description:image.caption});
				});

				this.imagesLoading = false;
				this.setState({cards:cards, scoll_index:scoll_index});
			});
	}

	render(){
		return (
			<main className="Gallery">
				<DocumentTitle title="Gallery" />
				<div className="title"><h1>Gallery</h1></div>
				<InfiniteScroll
					dataLength={this.state.cards.length}
					next={this.loadFunc}
					hasMore={this.state.hasMore}
				>
					{this.state.cards}
				</InfiniteScroll>
				<Modal visible={this.state.visible} id="modal" onCancel={this.cancel} bodyStyle={{padding:"0"}} 
					footer={null}>
					<ImageModalGallery index={this.state.index} gallery_images={this.gallery_images} />
				</Modal>
				<h3 ref={i => this.bottom_text = i}>{this.state.h3_display}</h3>
			</main>
		);
	}

	componentDidUpdate(){
		if(this.initialLoad && !this.imagesLoading){
			let rect = this.bottom_text.getBoundingClientRect();
			let elemTop = rect.top;
			let elemBottom = rect.bottom;
		
			let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

			if(isVisible){
				if(this.state.scoll_index >= this.images.length){
					this.initialLoad = false;
					this.setState({h3_display:"End Of Gallery", hasMore:false});
				}
				else{
					this.loadFunc();
				}
			}
			else{
				this.initialLoad = false;
			}
		}
	}

	loadFunc = () => {

		if(this.state.scoll_index >= this.images.length){
			this.setState({hasMore:false, h3_display:"End Of Gallery"});
			return;
		}

		if(this.imagesLoading){
			return;
		}
		
		let scoll_index = this.state.scoll_index + 10;
		if(scoll_index >= this.images.length){
			scoll_index = this.images.length;
		}

		let start = this.state.scoll_index;

		let cards = [];
		for(let i = start;i < scoll_index;i++){
			if(this.images[i].sitelocation.toLowerCase() !== this.lastLocation){
				this.lastLocation = this.images[i].sitelocation.toLowerCase();
				cards.push(<div key={this.lastLocation} className="title"><h2>{this.lastLocation.charAt(0).toUpperCase() + this.lastLocation.slice(1)}</h2></div>);
			}
			cards.push(
				<Card
					hoverable
					key={this.images[i].id}
					bodyStyle={{padding: "0"}}
					className="cards"
					onClick={() => this.showModal(i)}
					cover={
						<LazyLoad placeholder={<img alt="placeholder" className="small_image" src="/gallery/loading_image.gif" />}>
							<img alt={this.images[i].alt} className="small_image" src={"https://s3.amazonaws.com/fdsimagebucket/" + this.images[i].link} />
						</LazyLoad>
					}
				/>
			);
		}
		this.setState((prevState) => {return {scoll_index:scoll_index, cards:prevState.cards.concat(cards)};});
	}

	cancel(){
		this.setState({visible:false});
	}

	showModal(index){
		this.setState({
			visible:true, index:index
		});
	}
}

export default Gallery;