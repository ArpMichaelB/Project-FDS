import React, { Component } from "react";
import PropTypes from "prop-types";
import EmployeeMaintenance from "../../../../../pages/EmployeeMaintenance/EmployeeMaintenance";
import { Card, Button, Table } from "antd";
import { withRouter } from "react-router-dom";

import "./style.css";

class MaintenancePortalDetail extends Component {

	static get propTypes() {
		return {
			match: PropTypes.any,
			history: PropTypes.any
		};
	}

	render() {

		let columns = [{
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
		}, {
			title: "Problem",
			dataIndex: "request_body",
			key: "request_body",
		}, {
			title: "Assigned",
			dataIndex: "employee_name",
			key: "employee_name",
		}, {
			title: "Date Started",
			dataIndex: "date_started",
			key: "date_started",
		}, {
			title: "Date Finished",
			dataIndex: "date_finished",
			key: "date_finished",
		}, {
			title: "Comments",
			dataIndex: "employee_comments",
			key: "employee_comments",
		}];


		return (
			<React.Fragment>
				<Card title="Maintenance Request Details" bordered={false} id="maintenance_data">
					<Table dataSource={this.props.record} columns={columns}/>
					{/* <h3>Details for {this.props.match.params.tenantName}</h3> */}
					<Button onClick={() => this.props.history.push("/portal/maintenance/home")} className="basic_button">Back</Button>
				</Card>
				<EmployeeMaintenance />
			</React.Fragment>
		);
	}
}

export default withRouter(MaintenancePortalDetail);