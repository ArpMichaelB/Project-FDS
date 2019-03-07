import React, { Component } from "react";
import { Card } from "antd";

import "./style.css";

class TenantPortalMaintenance extends Component {
	render(){
		return(
			<div>
				<Card title="Maintenance Requests" bordered={false} className="maintenance_request_card">
					<h2>Maintenance Requets</h2>
				</Card>
				<Card title="Maintenance Request Form" bordered={false} className="maintenance_request_card">
					<h2>Maintenance Form</h2>
				</Card>
			</div>
		);
	}
}

export default TenantPortalMaintenance;