import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Sec from "../../hoc/sec/Sec";
import logo from "../../assets/images/logo.jpg";

import "./style.css";

class NavBar extends Component {

	state = {
		current: "home",
	}
	
	handleClick = (e) => {
		//console.log("click ", e);
		this.setState({
			current: e.key,
		});
	}

	goToLink = (link) =>{
		document.getElementById(link).click();
	}

	render() {

		const SubMenu = Menu.SubMenu;
		const MenuItemGroup = Menu.ItemGroup;

		return (
			<Sec>
				<div className="nav_items">
					<div className="logo"><Link to="/home"><img src={logo} alt="logo"  width="150rem" height="100rem"/></Link></div>
					<nav className="main_nav">
						<Menu
							onClick={this.handleClick}
							selectedKeys={[this.state.current]}
							mode="horizontal"
							className="nav_bar menu_item"
						>
							<Menu.Item key="home">
								<Link to="/home">Home</Link>
							</Menu.Item>
							<Menu.Item key="Gallery">
								<Link to="/gallery">Gallery</Link>
							</Menu.Item>
							<SubMenu onTitleClick={() => this.goToLink("available-properties")} title={<span className="submenu-title-wrapper">Properties</span>}>
								<MenuItemGroup>
									<Menu.Item key="setting:1"><Link id="available-properties" to="/available-properties">Available Properties</Link></Menu.Item>
									<Menu.Item key="setting:2"><Link to="/properties">All Properties</Link></Menu.Item>
								</MenuItemGroup>
							</SubMenu>
							<SubMenu onTitleClick={() => this.goToLink("tenant-maintenance")} title={<span className="submenu-title-wrapper">Maintenance</span>}>
								<MenuItemGroup>
									<Menu.Item key="setting:3"><Link id="tenant-maintenance" to="/tenant-maintenance">Tenant</Link></Menu.Item>
									<Menu.Item key="setting:4"><Link to="/employee-maintenance">Employee</Link></Menu.Item>
								</MenuItemGroup>
							</SubMenu>
							<Menu.Item key="Contact">
								<Link to="/contact">Contact</Link>
							</Menu.Item>
						</Menu>
					</nav>
				</div>
			</Sec>


		);
	}

}


export default NavBar;