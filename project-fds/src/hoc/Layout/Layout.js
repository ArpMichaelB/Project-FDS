import React, { Component } from "react";
import PropTypes from "prop-types";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import "../../styles/global.css";



class Layout extends Component {

	static get propTypes() {
		return {
			children: PropTypes.any
		};
	}

	render() {

		return (
			<div className="container">
				<div className="wrapper">
					<NavBar />
					<div className="main_spaceing">
						{this.props.children}
					</div>
					<Footer />
				</div>
			</div>

		);
	}
}






export default Layout;