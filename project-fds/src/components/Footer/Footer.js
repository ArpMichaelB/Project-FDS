import React, { Component } from "react";
import {Icon } from "antd";



import "./style.css";


class Footer extends Component {

	render() {

		return (

			<div className="footer">
				<span>Copyright <Icon type="copyright" /> Insight Management 2019-{(new Date().getFullYear())}</span>
				<span className="footer_link"><p><a href="/contact">Contact</a></p></span>
			</div>

		);
	}

}


export default Footer;