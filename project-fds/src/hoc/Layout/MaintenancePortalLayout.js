import React, { Component } from "react";
import PropTypes from "prop-types";
import {Layout as AntLayout, Menu, Icon} from "antd";
import logo from "../../assets/images/logo.jpg";
import { withRouter } from "react-router-dom";

import "../../styles/global.css";
import "./PortalLayout.css";



class MaintenancePortalLayout extends Component {

	static get propTypes() {
		return {
			children: PropTypes.any,
			history: PropTypes.object,
			location: PropTypes.object
		};
	}
	
	state = {
		collapsed: false,
		width: "100%",
		zIndex:0,
		height:"",
		position:"relative",
		margin:"0"
	};

	onCollapse = (collapsed) => {
		if(collapsed){
			this.setState({ collapsed, width:"100%"});
		}
		else{
			this.setState({ collapsed, width:"100%"});
		}
	}

	goToLink = (link) =>{
		this.props.history.push(link);
	}

	onBreakpoint = (breakpoint) =>{
		if(breakpoint){
			this.setState({zIndex:1, height:"100%", position:"fixed", margin:"80px"});
		}
		else{
			this.setState({zIndex:0, height:"", position:"relative", margin:"0"});
		}
	}

	render() {

		let location = this.props.location.pathname;
		if(location.slice(-1) === "/"){
			location = location.slice(0, location.length - 1);
		}

		let locations = [ "/maintenance/profile", "/maintenance/home"];
		if(!locations.includes(location)){
			location="/maintenance/home";
		}

		return(
			<AntLayout style={{ minHeight: "100vh" }}>
				<AntLayout.Sider
					collapsible
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
					breakpoint="sm"
					collapsedWidth="80px"
					onBreakpoint={(breakpoint) => this.onBreakpoint(breakpoint)}
					theme="light"
					id="slider"
					style={{zIndex:this.state.zIndex, position:this.state.position, height:this.state.height}}>
					<img src={logo} alt="logo" 
						style={{margin:"auto", aspectRatio: 1, display:"block"}}  
						width={this.state.width} height={undefined}/>
					<Menu id="menu" theme="light" selectedKeys={[location]} mode="inline">
						<Menu.Item key="/maintenance/home" onClick={() => this.goToLink("/maintenance/home")}>
							<Icon type="home" />
							<span>Home</span>
						</Menu.Item>
					</Menu>
				</AntLayout.Sider>
				<AntLayout style={{marginLeft:this.state.margin}}>
					<AntLayout.Content>
						{this.props.children}
					</AntLayout.Content>
				</AntLayout>
			</AntLayout>
		);
	}
}

export default withRouter(MaintenancePortalLayout);