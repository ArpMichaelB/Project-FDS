import React, { Component } from "react";
import axios from "axios";
import { Table, Card, Spin } from "antd";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./MaintenancePortalHome.css";

class MaintenancePortalHome extends Component {

	constructor(props){
		super(props);

		this.state = { width: 0, height: 0, dataSource:[], isLoading:true };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	static get propTypes() {
		return {
			history: PropTypes.object
		};
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions);

		let config = {
			headers: {
				"x-api-Key": "uQ7ipyNhNb7xNSNJr65Hy3JvplPPXmF49FwTNIRg",
				"Content-Type": "application/json"
			}
		};

		let url= "https://shr4ny5edi.execute-api.us-east-1.amazonaws.com/default/maintenancerequest?operation=readAll";

		axios.get(url, config)
			.then(response => {
				let data = response.data;
				this.setState({dataSource:JSON.parse(data.body),isLoading:false});
			});

		// let body = {
		// 	operation: "readAll",
		// };

		// const opts = {
		// 	method: "GET",
		// 	service: "execute-api",
		// 	region: "us-east-1",
		// 	path: "/default/maintenancerequest",
		// 	host: "shr4ny5edi.execute-api.us-east-1.amazonaws.com",
		// 	headers:{
		// 		"x-api-Key": "uQ7ipyNhNb7xNSNJr65Hy3JvplPPXmF49FwTNIRg",
		// 		"Content-Type": "application/json"
		// 	},
		// 	url: "https://shr4ny5edi.execute-api.us-east-1.amazonaws.com/default/maintenancerequest?operation=readAll",
		// 	data: body,
		// 	body: JSON.stringify(body)
		// };

		// const request = aws4.sign(opts);
		// delete request.headers.Host;
		// delete request.headers["Content-Length"];

		// axios(request)
		// 	.then((response)=> {
		// 		console.log(response.data.body);
		// 	});
	}
	
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	
	render(){

		let columns;
		if(this.state.width <= 700){
			columns = [{
				title: "Requester",
				dataIndex: "requester_name",
				key: "requester_name",
			}];
		}
		else{
			columns = [{
				title: "Requester",
				dataIndex: "requester_name",
				key: "requester_name",
			}, {
				title: "Date Requested",
				dataIndex: "date_requested",
				key: "date_requested",
			}, {
				title: "Address",
				dataIndex: "address",
				key: "address"
			},{
				title: "Problem",
				dataIndex: "request_body",
				key: "request_body",
			},{
				title: "Assigned",
				dataIndex: "employee_name",
				key: "employee_name",
			},{
				title: "Date Started",
				dataIndex: "date_started",
				key: "date_started",
			},{
				title: "Date Finished",
				dataIndex: "date_finished",
				key: "date_finished",
			},{
				title: "Comments",
				dataIndex: "employee_comments",
				key: "employee_comments",
			}];
		}

		return(
			<Card title="Maintenance Requests" bordered={false} id="maintenance_home_data">
				{this.state.isLoading ? (
					<Spin />
				) : (
					<Table dataSource={this.state.dataSource} columns={columns}
						onRow={(record) => {
							return {
								onClick: () => this.props.history.push("/portal/maintenance/details/" + record)
							};
						}}
					/>
				)}
			</Card>
		);
	}
}


export default withRouter(MaintenancePortalHome);