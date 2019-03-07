import React, { Component } from "react";
import { Table, Card } from "antd";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./MaintenancePortalHome.css";

class MaintenancePortalHome extends Component {

	constructor(props){
		super(props);

		this.state = { width: 0, height: 0 };
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
				title: "Address",
				dataIndex: "address",
				key: "address",
			}, {
				title: "Request",
				dataIndex: "issue",
				key: "issue"
			}];
		}
		else{
			columns = [{
				title: "Tenant Name",
				dataIndex: "tenantName",
				key: "tenantName",
			}, {
				title: "Address",
				dataIndex: "address",
				key: "address",
			}, {
				title: "Request",
				dataIndex: "issue",
				key: "issue"
			}];
		}

		return(
			<Card title="Maintenance Requests" bordered={false} id="maintenance_home_data">
				<Table dataSource={dataSource} columns={columns} 
					onRow={(record) => {
						return {
							onClick: () => this.props.history.push("/maintenance/details/" + record.tenantName)
						};
					}}
				/>
			</Card>
		);
	}
}

const dataSource = [{
	key: "1",
	tenantName: "Mike",
	address: "10 Downing Street",
	issue: "broken sink"
}, {
	key: "2",
	tenantName: "John",
	address: "10 Downing Street",
	issue: "broken fridge"
}];

export default withRouter(MaintenancePortalHome);