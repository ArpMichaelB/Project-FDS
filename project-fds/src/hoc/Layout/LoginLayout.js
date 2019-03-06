import React, { Component } from "react";
import PropTypes from "prop-types";
import Footer from "../../components/Footer/Footer";


class LoginLayout extends Component {

	static get propTypes() {
		return {
			children: PropTypes.any
		};
	}

	render() {

		return (
			<div className="container">
				<div className="wrapper">
					{this.props.children}
					<Footer />
				</div>
			</div>

		);
	}
}






export default LoginLayout;