import React, { Component } from "react";
import {Icon } from "antd";



import "./style.css";


class Footer extends Component {

	test = () =>{
		
	}


	render() {

		return (

			<div id="footer">
				<p className="has_link">
					Email: <a href="mailto:joeerenberger@gmail.com" className="convenience_link">joeerenberger@gmail.com</a> | 
					Phone: <a href="tel:1-309-292-2777" className="convenience_link">(309)-292-2777</a> | 
					Address: 
					<a href="https://goo.gl/maps/2VoJjZrcHqG2" className="convenience_link">
						230 West 3rd St., Suite 216
						Davenport, IA, 52801
					</a>
				</p>
				<p className="no_link">
					Email: joeerenberger@gmail.com | Phone: (309)-292-2777 |
					Address:
					<a href="https://goo.gl/maps/2VoJjZrcHqG2" className="convenience_link">
						230 West 3rd St., Suite 216
						Davenport, IA, 52801
					</a>
				</p><br />
				<span>Copyright <Icon type="copyright" /> Insight Manegment 2019-{(new Date().getFullYear())}</span>
			</div>

		);
	}

}


export default Footer;