import React, { PureComponent } from "react";
import { Card, Button } from "antd";
import { connect } from "react-redux";
import * as actions from "../../../../../actions";
import PropTypes from "prop-types";


import "./style.css";

class TenantPortalHome extends PureComponent {

	static propTypes = {
		tenantInfo: PropTypes.any,
		fetchTenant: PropTypes.any
	}

	componentWillMount() {
		this.props.fetchTenant();
	}


	renderTenant() {
		const tenantInfo = JSON.parse(this.props.tenantInfo);
		return <div id="user_portal_home_container">
			<h1 className="title" id="portal_home_title">Portal Homepage</h1>
			<div id="user_portal_card_container">
				<Card title="Current Statement" bordered={false} className="portal_home_cards">
					<p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Rent Due: X</p>
					<p>Due Date: X</p>
					<p>Autopay Date: no autopay setup</p>
					<Button className="basic_button">Make Payment</Button>
				</Card>
				<Card title="Notifications" bordered={false} className="portal_home_cards">
					<p>No Notifications</p>
				</Card>
				<Card title="User Info" bordered={false} className="portal_home_cards">
					<p>Name: {tenantInfo.fullname}</p>
					<p>Email: {tenantInfo.email}</p>
					<p>Address: {tenantInfo.address}</p>
				</Card>
				<Card title="Maintenance Requests" bordered={false} className="portal_home_cards">
					<p>No open requests at this time</p>
				</Card>
			</div>
		</div>;
	} 

	render() {

		if (!this.props.tenantInfo) {
			return <div>Loading...</div>;
		}


		return (
			<div>
				<ul>
					{this.renderTenant()}
				</ul>
			</div>
		);
	}

}
const mapStateToProps = (state) => {
	return { tenantInfo: state.tenantInfo.tenant };
};

export default connect(mapStateToProps, actions)(TenantPortalHome);