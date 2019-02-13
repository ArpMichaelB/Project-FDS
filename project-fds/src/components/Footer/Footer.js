import React, { Component } from "react";
import {Icon } from "antd";



import "./style.css";


class Footer extends Component {


	render() {

		return (

			<div id="footer">
				<p>Email: joeerenberger@gmail.com | Phone: (309)-292-2777 | Address: 230 West 3rd St., Suite 216 Davenport, IA, 52801</p>
				<span>Copyright <Icon type="copyright" /> Yash Technologies 2019-{(new Date().getFullYear())}</span>
			</div>

		);
	}

}


export default Footer;