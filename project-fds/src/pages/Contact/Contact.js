import React from "react";
import {Form, Input, Button} from "antd";

import "./style.css";

const Contact = () => {
	const formInputSmallLayout = {labelCol: {span:2},wrapperCol:{span:8}};
	const formInputLargeLayout = {labelCol: {span:2},wrapperCol:{span:23}};
	const formInputButtonLayout = {labelCol: {},wrapperCol:{}};
	return (

		<main className="Contact">
			<h1 className = "contact_info_title">Contact Page</h1>
			<div className="contact_info_information">
				<p>
					Insight Management and rentals
				</p>
				<p>
					Address:
					230 West 3rd St., Suite 216
					Davenport, IA, 52801
				</p>
				<p>
					Phone: 3092922777
				</p>
				<p>
					Email: joeerenberger@gmail.com
				</p>
			</div>
			<div className="contact_info_form_wrapper">
				<Form>
					<Form.Item label="First Name" {...formInputSmallLayout}>
						<Input className="contact_info_form_input" placeholder="First Name"/>
					</Form.Item>
					<Form.Item label="Last Name" {...formInputSmallLayout}>
						<Input className="contact_info_form_input" placeholder="Last Name"/>
					</Form.Item>
					<Form.Item label="E-Mail" {...formInputSmallLayout}>
						<Input className="contact_info_form_input" placeholder="E-Mail"/>
					</Form.Item>
					<Form.Item label="Phone" {...formInputSmallLayout}>
						<Input className="contact_info_form_input" placeholder="Phone Number"/>
					</Form.Item>
					<Form.Item label="Your Message" {...formInputLargeLayout}>
						<Input.TextArea className="contact_info_form_input_large" rows={4} placeholder="Please give us a description of the type of property you are seeking. Area,size,etc.."/>
					</Form.Item>
					<Form.Item {...formInputButtonLayout}>
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