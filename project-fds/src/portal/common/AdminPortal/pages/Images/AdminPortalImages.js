import React, { Component } from "react";
import { Card, Upload, Button, Icon, Input } from "antd";
import aws4 from "aws4";
import axios from "axios";
import LazyLoad from "react-lazyload";
import InfiniteScroll from "react-infinite-scroll-component";
import CardCover from "./CardCover";

import "./style.css";

class AdminPortalImages extends Component {

	constructor(props){
		super(props);

		this.state = {
			files:[],
			hideError:true,
			caption:"",
			location:"",
			alt:"",
			errMessage:"Please Fill Out All Fields",
			color:"red",
			cards:[],
			scoll_index:0,
			hasMore:true,
			h3_display:"Loading ..."
		};

		this.lastLocation = "";
		this.images = [];
		this.imagesLoading = true;

		fetch("https://shr4ny5edi.execute-api.us-east-1.amazonaws.com/default/image?operation=readAll")
			.then(response => response.json())
			.then(data => {
				this.images = JSON.parse(data.body);
				this.imagesLoading = false;
				this.createCards();
			});
	}

	render(){

		let properties = {
			onRemove: (file) => {
				this.setState((state) => {
					const index = state.files.indexOf(file);
					const files = state.files.slice();
					files.splice(index, 1);
					return {
						files: files
					};
				});
			},
			beforeUpload: (file) => {
				this.setState((state) => {
					const files = state.files.slice();
					files.push(file);
					return {
						files: files
					};
				});
				return false;
			},
			fileList: this.state.files,
			accept:"image/*,.HEIC"
		};

		return(
			<div>
				<Card title="Upload Images" bordered={false} className="admin_images_card">
					<Input className="admin_upload_field" value={this.state.caption} onChange={this.saveCaption} placeholder="Caption" />
					<Input className="admin_upload_field" value={this.state.location} onChange={this.saveLocation} placeholder="Location" />
					<Input className="admin_upload_field" value={this.state.alt} onChange={this.saveAlt} placeholder="Alt" />
					<Upload {...properties}>
						<Button id="admin_upload_button">
							<Icon type="upload" /> Select File
						</Button>
					</Upload>
					<div id="admin_upload_bottom">
						<Button style={{float:"right"}} onClick={this.uploadImages}>Upload</Button>
						<div hidden={this.state.hideError} style={{color:this.state.color}} id="admin_upload_error">{this.state.errMessage}</div>
					</div>
				</Card>
				<Card title="Edit Images" bordered={false} className="admin_images_card">
					<InfiniteScroll
						dataLength={this.state.cards.length}
						next={this.createCards}
						hasMore={this.state.hasMore}
					>
						{this.state.cards}
					</InfiniteScroll>
					<h3 ref={i => this.bottom_text = i} id="admin-images-end">{this.state.h3_display}</h3>
				</Card>
			</div>
		);
	}

	remove =(i)=> {
		this.setState(prevState => {
			let cards = prevState.cards.slice();
			cards.splice(i, 1);
			return {cards:cards};
		});
	}

	createCards = () => {

		if(this.state.scoll_index >= this.images.length){
			this.setState({hasMore:false, h3_display:"End of Images"});
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
				cards.push(<div key={cards.length + this.state.cards.length} className="title"><h2>{this.lastLocation.charAt(0).toUpperCase() + this.lastLocation.slice(1)}</h2></div>);
			}
			cards.push(
				<CardCover
					key={cards.length + this.state.cards.length}
					image={this.images[i]}
					bodyStyle={{padding: "0"}}
					classNameValue="admin-image-edit-cards"
					remove={this.remove}
					index={cards.length + this.state.cards.length}
					cover={
						<LazyLoad placeholder={<img alt="placeholder" className="admin-image-small_image" src="/gallery/loading_image.gif" />}>
							<img alt={this.images[i].alt} className="admin-image-small_image" src={"https://s3.amazonaws.com/fdsimagebucket/" + this.images[i].link} />
						</LazyLoad>
					}
				/>
			);
		}

		this.setState((prevState) => {return {scoll_index:scoll_index, cards:prevState.cards.concat(cards)};});
	}

	uploadImages = () => {
		if((this.state.location === "") || (this.state.alt === "") || (this.state.caption === "") || (this.state.files.length === 0)){
			this.setState({hideError:false, errMessage:"Please Fill Out All Fields", color:"red"});
		}
		else{
			this.fetchIterate(0);
			this.setState({
				errMessage:"Uploading ...", 
				hideError:false, 
				color:"black"
			});
		}
	}

	fetchIterate = (index) => {
		if(index >= this.state.files.length){
			this.setState({
				files:[],
				caption:"",
				location:"",
				alt:"",
				errMessage:"Image Successfully Uploaded", 
				hideError:false, 
				color:"black"
			});
		}
		else{
			let image = this.state.files[index];
			const reader = new FileReader();
			reader.readAsDataURL(image);
			reader.onload = () => {
				let result = reader.result;
				let end = result.indexOf("base64,");
				let baseImage = result.substring(end + 7);

				let body = {
					caption:this.state.caption,
					image:baseImage,
					location:this.state.location,
					alt:this.state.alt,
					operation:"create"
				};

				const opts = {
					method: "PUT",
					service: "execute-api",
					region: "us-east-1",
					path: "/default/image",
					host: "shr4ny5edi.execute-api.us-east-1.amazonaws.com",
					headers: { 
						"x-api-key": "uQ7ipyNhNb7xNSNJr65Hy3JvplPPXmF49FwTNIRg",
						"Content-Type": "application/json"
					},
					url: "https://shr4ny5edi.execute-api.us-east-1.amazonaws.com/default/image",
					data: body,
					body:JSON.stringify(body)
				};

				const request = aws4.sign(opts);
				delete request.headers.Host;
				delete request.headers["Content-Length"];

				axios(request)
					.then(() => {
						this.fetchIterate(index + 1);
					})
					.catch(err => {
						this.setState({
							hideError:false,
							errMessage:err.statusText,
							color:"red",
							files:[],
							caption:"",
							location:"",
							alt:""
						});
					});
			};
		}
	}

	saveCaption = (caption) => {
		this.setState({caption:caption.target.value});
	}

	saveLocation = (location) => {
		this.setState({location:location.target.value});
	}

	saveAlt = (alt) => {
		this.setState({alt:alt.target.value});
	}
}

export default AdminPortalImages;