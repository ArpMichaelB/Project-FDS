import React, { Component } from "react";
import {Icon } from "antd";



import "./style.css";


class Footer extends Component {

	render() {

		return (

			<div id="footer">
				<p className="footer_has_link">
					Email: <a href="mailto:joeerenberger@gmail.com" className="footer_convenience_link">joeerenberger@gmail.com</a> | 
					Phone: <a href="tel:1-309-292-2777" className="footer_convenience_link">(309)-292-2777</a> | 
					Address: 
					<a href="https://goo.gl/maps/2VoJjZrcHqG2" className="footer_convenience_link">
						230 West 3rd St., Suite 216
						Davenport, IA, 52801
					</a>
				</p>
				<p className="footer_no_link">
					Email: joeerenberger@gmail.com | Phone: (309)-292-2777 |
					Address:
					<a href="https://goo.gl/maps/2VoJjZrcHqG2" className="footer_convenience_link">
						230 West 3rd St., Suite 216
						Davenport, IA, 52801
					</a>
				</p>
				<span>Copyright <Icon type="copyright" /> Insight Management 2019-{(new Date().getFullYear())}</span>
			</div>

		);
	}

}


export default Footer;