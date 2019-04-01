import React, { Component } from "react";
import { Card } from "antd";

import "./style.css";

class AdminPortalHome extends Component {

	render(){
		return(
			<Card title="Profile" bordered={false} className="admin_home_card">
				<h2>Home</h2>
			</Card>
		);
	}
}

export default AdminPortalHome;