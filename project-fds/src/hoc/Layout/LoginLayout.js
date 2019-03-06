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
			<div className="login_container">
				<div className="login_wrapper">
					{this.props.children}
					<Footer />
				</div>
			</div>

		);
	}
}






export default LoginLayout;