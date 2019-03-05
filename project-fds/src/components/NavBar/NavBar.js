import React, { Component } from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import Sec from "../../hoc/sec/Sec";
import logo from "../../assets/images/logo.jpg";
import PropTypes from "prop-types";

import "./style.css";

class NavBar extends Component {

	static propTypes = {
		history: PropTypes.object,
		location: PropTypes.object
	}
	
	handleClick = (e) => {
		this.setState({
			current: e.key,
		});
	}

	goToLink = (link) =>{
		this.props.history.push(link);
	}

	render() {

		const SubMenu = Menu.SubMenu;
		const MenuItemGroup = Menu.ItemGroup;

		let location = this.props.location.pathname;
		if(location.slice(-1) === "/"){
			location = location.slice(0, location.length - 1);
		}

		if(location.search("/property") === 0){
			location = "/properties";
		}

		let locations = ["/home", "/partners", "/gallery", "/available-properties", "/properties", "/tenant-maintenance", "/employee-maintenance", "/contact", "/team"];
		if(!locations.includes(location)){
			location="/home";
		}

		return (
			<Sec>
				<div className="nav_items">
					<div className="logo">
						<Link to="/home">
							<img src={logo} alt="logo"  width="150rem" height="100rem"/>
						</Link>
						<div className="access_container">
							<p><a href="/login">Portal Login</a></p> 
						</div>
					</div>
					<nav className="main_nav">
						<Menu
							onClick={this.handleClick}
							selectedKeys={[location]}
							mode="horizontal"
							className="nav_bar menu_item"
						>
							<Menu.Item key="/home">
								<Link to="/home">Home</Link>
							</Menu.Item>
							<Menu.Item key="/gallery">
								<Link to="/gallery">Gallery</Link>
							</Menu.Item>
							<SubMenu onTitleClick={() => this.goToLink("/available-properties")} title={<span className="submenu-title-wrapper">Properties</span>}>
								<MenuItemGroup>
									<Menu.Item key="/available-properties"><Link to="/available-properties">Available Properties</Link></Menu.Item>
									<Menu.Item key="/properties"><Link to="/properties">All Properties</Link></Menu.Item>
								</MenuItemGroup>
							</SubMenu>
							<Menu.Item key="/team">
								<Link to="/team">Our Team</Link>
							</Menu.Item>
							<Menu.Item key="/partners">
								<Link to="/partners">Partners</Link>
							</Menu.Item>
							<Menu.Item key="/apply">
								<Link to="/apply">Apply Now</Link>
							</Menu.Item>
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