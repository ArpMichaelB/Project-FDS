import React, { Component } from "react";
import { Card } from "antd";

import "./style.css";

class TenantPortalProfile extends Component {

	render(){
		return(
			<Card title="Profile" bordered={false} className="profile_card">
				<h2>Payment Form</h2>
			</Card>
		);
	}
}

export default TenantPortalProfile;