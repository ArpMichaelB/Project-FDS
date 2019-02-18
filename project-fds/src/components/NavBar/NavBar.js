import React, { Component } from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import Sec from "../../hoc/sec/Sec";
import logo from "../../assets/images/logo.jpg";
import PropTypes from "prop-types";

import "./style.css";

class NavBar extends Component {

	constructor(props){
		super(props);

		let location = this.props.location.pathname;
		if(location.slice(-1) === "/"){
			location = location.slice(0, location.length - 1);
		}

		if(location === ""){
			location="/home";
		}

		this.state = {
			current: location
		};
	}

	static propTypes = {
		history: PropTypes.object,
		location: PropTypes.object
	}
	
	handleClick = (e) => {
		this.setState({
			current: e.key,
		});
	}

	goToLink = (link, key) =>{
		this.props.history.push(link);
		this.setState({current:key});
	}

	changeSelected = (key) => {
		this.setState({current:key});
	}

	render() {

		const SubMenu = Menu.SubMenu;
		const MenuItemGroup = Menu.ItemGroup;

		return (
			<Sec>
				<div className="nav_items">
					<div className="logo">
						<Link to="/home" onClick={() => this.changeSelected("home")}>
							<img src={logo} alt="logo"  width="150rem" height="100rem"/>
						</Link>
					</div>
					<nav className="main_nav">
						<Menu
							onClick={this.handleClick}
							selectedKeys={[this.state.current]}
							mode="horizontal"
							className="nav_bar menu_item"
						>
							<Menu.Item key="/home">
								<Link to="/home">Home</Link>
							</Menu.Item>
							<Menu.Item key="/gallery">
								<Link to="/gallery">Gallery</Link>
							</Menu.Item>
							<SubMenu onTitleClick={() => this.goToLink("/available-properties", "/available-properties")} title={<span className="submenu-title-wrapper">Properties</span>}>
								<MenuItemGroup>
									<Menu.Item key="/available-properties"><Link to="/available-properties">Available Properties</Link></Menu.Item>
									<Menu.Item key="/properties"><Link to="/properties">All Properties</Link></Menu.Item>
								</MenuItemGroup>
							</SubMenu>
							<SubMenu onTitleClick={() => this.goToLink("/tenant-maintenance", "/tenant-maintenance")} title={<span className="submenu-title-wrapper">Maintenance</span>}>
								<MenuItemGroup>
									<Menu.Item key="/tenant-maintenance"><Link to="/tenant-maintenance">Tenant</Link></Menu.Item>
									<Menu.Item key="/employee-maintenance"><Link to="/employee-maintenance">Employee</Link></Menu.Item>
								</MenuItemGroup>
							</SubMenu>
							<Menu.Item key="/contact">
								<Link to="/contact">Contact</Link>
							</Menu.Item>
						</Menu>
					</nav>
				</div>
			</Sec>
		);
	}

}

export default withRouter(NavBar);