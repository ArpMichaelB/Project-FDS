import React, { Component } from "react";
import PropTypes from "prop-types";
import Nav from "../../components/Nav/Nav";
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
					<Nav />
					<main>
						{this.props.children}
					</main>
					<Footer />
				</div>
			</div>

		);
	}
}






export default Layout;