import React, { Component } from "react";
import { Card, Icon, Button } from "antd";
import { connect } from "react-redux";
import {fetchTenant, editEmail} from "../../../../../actions";
import PropTypes from "prop-types";
import axios from "axios";
import aws4 from "aws4";

import "./style.css";

class TenantPortalProfile extends Component {

	constructor(props){
		super(props);

		if(!this.props.tenantInfo)
			this.props.fetchTenant();
	}

	static propTypes = {
		tenantInfo: PropTypes.object,
		fetchTenant: PropTypes.any,
		editEmail: PropTypes.any
	}

	state = {
		editMode:false,
		email:""
	}

	render(){
		if(!this.props.tenantInfo){
			return(
				<Card title="Profile" bordered={false} className="profile_card">
					<Icon type="loading" />
				</Card>
			);
		}
		else if(this.state.editMode){
			return(
				<Card title="Profile" bordered={false} className="profile_card">
					<h4 style={{display:"inline"}}>Email</h4>: <input onChange={this.saveEmail} value={this.state.email} />
					<Button onClick={this.updateUser} className="profile_basic_button">Save</Button><br /><br />
					<h4 style={{display:"inline"}}>Name</h4>: {this.props.tenantInfo.fullname}<br /><br />
					<h4 style={{display:"inline"}}>Address</h4>: {this.props.tenantInfo.address}
				</Card>
			);
		}
		else {
			return(
				<Card title="Profile" bordered={false} className="profile_card">
					<h4 style={{display:"inline"}}>Email</h4>: {this.props.tenantInfo.email}
					<Button onClick={this.toggleEditMode} className="profile_basic_button">Edit</Button><br /><br />
					<h4 style={{display:"inline"}}>Name</h4>: {this.props.tenantInfo.fullname}<br /><br />
					<h4 style={{display:"inline"}}>Address</h4>: {this.props.tenantInfo.address}
				</Card>
			);
		}
	}

	toggleEditMode=()=>{
		this.setState({editMode:!this.state.editMode, email:this.props.tenantInfo.email});
	}

	saveEmail=(event)=>{
		this.setState({email:event.target.value});
	}

	updateUser=()=>{
		let body = {
			operation: "update",
			email: this.state.email,
			pass:this.props.tenantInfo.pass,
			full_name:this.props.tenantInfo.fullname,
			address:this.props.tenantInfo.address,
			id:this.props.tenantInfo.id
		};

		const opts = {
			method: "PUT",
			service: "execute-api",
			region: "us-east-1",
			path: "/default/tenant",
			host: "shr4ny5edi.execute-api.us-east-1.amazonaws.com",
			headers: {
				"x-api-key": "uQ7ipyNhNb7xNSNJr65Hy3JvplPPXmF49FwTNIRg",
				"Content-Type": "application/json"
			},
			url: "https://shr4ny5edi.execute-api.us-east-1.amazonaws.com/default/tenant",
			data: body,
			body: JSON.stringify(body)
		};

		const request = aws4.sign(opts);
		delete request.headers.Host;
		delete request.headers["Content-Length"];

		this.props.editEmail(this.state.email);

		axios(request)
			.then(() => {
				this.setState({editMode:false});
			})
			.catch(error => alert(error));
	}
}

const mapStateToProps = (state) => {
	return { tenantInfo: state.tenantInfo.tenant };
};

const mapDispatchToProps = (dispatch) => {
	return{
		fetchTenant: () => dispatch(fetchTenant()),
		editEmail: (email) => dispatch(editEmail(email))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TenantPortalProfile);