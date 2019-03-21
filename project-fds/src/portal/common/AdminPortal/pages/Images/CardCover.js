import React, { Component } from "react";
import { Popconfirm, Card, Button, Input } from "antd";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import aws4 from "aws4";
import axios from "axios";

class CardCover extends Component {

	static propTypes = {
		bodyStyle:PropTypes.object,
		classNameValue:PropTypes.string,
		cover:PropTypes.any,
		image:PropTypes.object,
		reload:PropTypes.func
	}

	state = {
		caption:this.props.image.caption,
		alt:this.props.image.alt,
		location:this.props.image.sitelocation,
		errMessage:"",
		hideError:true,
		color:"black"
	}


	render(){
		return(
			<Card
				bodyStyle={this.props.bodyStyle}
				className={this.props.classNameValue}
				cover={this.props.cover}
			>
				<div id="admin-image-data-block">
					<table>
						<tbody>
							<tr>
								<td>Caption:</td>
								<td><Input className="admin-image-edit-field" value={this.state.caption} onChange={this.saveCaption} /></td>
							</tr>
							<tr>
								<td>Alt:</td>
								<td><Input className="admin-image-edit-field" value={this.state.alt} onChange={this.saveAlt} /></td>
							</tr>
							<tr>
								<td>Location:</td>
								<td><Input className="admin-image-edit-field" value={this.state.location} onChange={this.saveLocation} /></td>
							</tr>
						</tbody>
					</table>
					<div className="admin-image-button-group">
						<Popconfirm title="Are you sure you want to edit this image?" onConfirm={this.editImage} okText="Yes" cancelText="No">
							<Button>Edit</Button>
						</Popconfirm>
						<Popconfirm title="Are you sure you want to delete this image?" onConfirm={this.deleteImage} okText="Yes" cancelText="No">
							<Button className="admin-image-delete">Delete</Button>
						</Popconfirm>
						<div hidden={this.state.hideError} style={{color:this.state.color, display:"inline"}} id="admin_upload_error">
							{this.state.errMessage}
						</div>
					</div>
				</div>
			</Card>
		);
	}

	deleteImage = () => {
		let body = {
			id:this.props.image.id,
			operation:"delete"
		};

		const opts = {
			method: "DELETE",
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

		this.setState({
			errMessage:"Deleting ...",
			hideError:false,
			color:"black"
		});

		axios(request)
			.then(() => {
				this.props.reload();
			})
			.catch(err => {
				this.setState({
					errMessage:err.statusText,
					hideError:false,
					color:"red"
				});
			});
	}

	editImage = () => {
		let body = {
			caption:this.state.caption,
			location:this.state.location,
			alt:this.state.alt,
			id:this.props.image.id,
			operation:"update"
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

		this.setState({
			errMessage:"Editing ...",
			hideError:false,
			color:"black"
		});

		axios(request)
			.then(() => {
				this.setState({
					errMessage:"Success!",
					hideError:false,
					color:"black"
				});
			})
			.catch(err => {
				this.setState({
					errMessage:err.statusText,
					hideError:false,
					color:"red"
				});
			});
	}

	saveCaption =(e) => {
		this.setState({caption:e.target.value});
	}

	saveAlt =(e) => {
		this.setState({alt:e.target.value});
	}

	saveLocation =(e) => {
		this.setState({location:e.target.value});
	}
}

export default withRouter(CardCover);