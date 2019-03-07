import React, { Component } from "react";
import { Card, Button } from "antd";

import "./style.css";


class UserPortalHome extends Component {
	render(){
		return(
			<div id="user_portal_home_container">
				<h1 className="title" id="portal_home_title">Portal Homepage</h1>
				<div id="user_portal_card_container">
					<Card title="Current Statement" bordered={false} className="portal_home_cards">
						<p style={{fontSize:"1.5rem", fontWeight:"bold"}}>Rent Due: X</p>
						<p>Due Date: X</p>
						<p>Autopay Date: no autopay setup</p>
						<Button className="basic_button">Make Payment</Button>
					</Card>
					<Card title="Notifications" bordered={false} className="portal_home_cards">
						<p>No Notifications</p>
					</Card>
					<Card title="User Info" bordered={false} className="portal_home_cards">
						<p>Name: X</p>
						<p>Email: X</p>
						<p>Address: X</p>
					</Card>
					<Card title="Maintenance Requests" bordered={false} className="portal_home_cards">
						<p>No open requests at this time</p>
					</Card>
				</div>
			</div>
		);
	}
}

export default UserPortalHome;