import React, { Component } from "react";
import PropTypes from "prop-types";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import {Layout as AntLayout, Menu, Icon} from "antd";

import "../../styles/global.css";



class Layout extends Component {

	static get propTypes() {
		return {
			children: PropTypes.any,
			login_status:Boolean
		};
	}
	
	state = {
		collapsed: false,
	};

	onCollapse = (collapsed) => {
		this.setState({ collapsed });
	}

	render() {

		if(!this.props.login_status){
			return (
				<div className="container">
					<div className="wrapper">
						<NavBar />
						{this.props.children}
						<Footer />
					</div>
				</div>
			);
		}
		else{
			return(
				<AntLayout style={{ minHeight: "100vh" }}>
					<AntLayout.Sider
						collapsible
						collapsed={this.state.collapsed}
						onCollapse={this.onCollapse}>
						<div className="logo" />
						<Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
							<Menu.Item key="1">
								<Icon type="pie-chart" />
								<span>Option 1</span>
							</Menu.Item>
							<Menu.Item key="2">
								<Icon type="desktop" />
								<span>Option 2</span>
							</Menu.Item>
						</Menu>
					</AntLayout.Sider>
					{this.props.children}
				</AntLayout>
			);
		}
	}
}






export default Layout;