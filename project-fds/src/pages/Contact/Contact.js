import React from "react";
import {Form, Input, Button} from "antd";

import "./style.css";

const Contact = () => {

	return (

		<main className="Contact">
			<h1>Contact Page</h1>
			<div className="contact_info_box">
			
			</div>
			<div className="contact_info_form_wrapper">
				<Form>
					<Form.Item layout="vertical">
						<Input className="contact_info_form_input" placeholder="First Name"/>
					</Form.Item>
					<Form.Item layout="vertical">
						<Input className="contact_info_form_input" placeholder="Last Name"/>
					</Form.Item>
					<Form.Item layout="vertical">
						<Input className="contact_info_form_input" placeholder="E-Mail"/>
					</Form.Item>
					<Form.Item layout="vertical">
						<Input className="contact_info_form_input" placeholder="Phone Number"/>
					</Form.Item>
					<Form.Item layout="vertical">
						<Input className="contact_info_form_input" placeholder="Your Message"/>
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="contact_info_form_button"
						>
							Send Message
						</Button>
					</Form.Item>
				</Form>
			</div>
		</main>
	);
};

export default Contact;