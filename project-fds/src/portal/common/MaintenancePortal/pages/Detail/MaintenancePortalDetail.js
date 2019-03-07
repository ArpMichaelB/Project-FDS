import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card } from "antd";

import "./style.css";

class MaintenancePortalDetail extends Component {

	static get propTypes() {
		return {
			match: PropTypes.any
		};
	}

	render(){
		return(
			<Card title="Maintenance Request Details" bordered={false} id="maintenance_data">
				<h3>Details for {this.props.match.params.tenantName}</h3>
			</Card>
		);
	}
}

export default MaintenancePortalDetail;