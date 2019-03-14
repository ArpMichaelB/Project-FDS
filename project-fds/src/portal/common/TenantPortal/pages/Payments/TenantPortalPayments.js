import React, { Component } from "react";
import { Card } from "antd";

import "./style.css";

class TenantPortalPayments extends Component {
	render(){
		return(
			<div>
				<Card title="Payment Form" bordered={false} className="payment_card">
					<h2>Payment Form</h2>
				</Card>
				<Card title="Autopay Details" bordered={false} className="payment_card">
					<h2>Autopay Details</h2>
				</Card>
			</div>
		);
	}
}

export default TenantPortalPayments;