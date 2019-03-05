import React from "react";
import {Icon} from "antd";
import DocumentTitle from "react-document-title";

import "./style.css";

const Contact = () => {
	return (
		<main className="Contact">
			<DocumentTitle title="Contact Us" />
			<div className="title"><h1>Contact Us</h1></div>
			<div className="contact_info_information">
				<div className="contact-column">
					<Icon type="home" className="contact-icon" /><br />
					<h3>Address</h3>
					Insight Management and Rentals<br />
					<a href="https://goo.gl/maps/2VoJjZrcHqG2" className="convenience_link">
						814 E. River Dr.
						Davenport, IA. 52803
					</a>
				</div>
				<div className="has_link contact-column">
					<Icon type="mail" className="contact-icon" /><br />
					<h3>Email</h3>
					<a href="mailto:joeerenberger@gmail.com" className="convenience_link">joeerenberger@gmail.com</a>
				</div>
				<div className="no_link contact-column">
					<Icon type="mail" className="contact-icon" /><br />
					<h3>Email</h3>
					joeerenberger@gmail.com
				</div>
			</div>
			<div className="contact_info_information">
				<div className="contact-column">
					<Icon type="clock-circle" className="contact-icon" /><br />
					<h3>Office Hours</h3>
					8am to 5pm - Monday thru Friday.<br />
					9am to 11am the first saturday of each month<br />
				</div>
				<div className="has_link contact-column">
					<Icon type="phone" className="contact-icon" /><br />
					<h3>Phone</h3>
					<a href="tel:1-309-292-2777" className="convenience_link">(309)-292-2777</a><br />
					Rental Office: <a href="tel:1-563-424-1310" className="convenience_link">(563)-424-1310</a>
				</div>
				<div className="no_link contact-column">
					<Icon type="phone" className="contact-icon" /><br />
					<h3>Phone</h3>
					(309)-292-2777 <br />
					Rental Office: (563)-424-1310
				</div>
			</div>
		</main>
	);
};

export default Contact;