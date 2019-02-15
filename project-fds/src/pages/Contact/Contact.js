import React from "react";
import {Form, Input, Button} from "antd";

import "./style.css";

const Contact = () => {
	const formInputSmallLayout = 
	{
		labelCol: 
		{
			sm: {span: 6},
			md: {span: 4},
			lg: {span: 3},
			xl: {span: 3},
			xxl: {span:2}
		},
		wrapperCol:
		{
			sm: {span:8},
		}
	};
	const formInputLargeLayout =
	{
		labelCol: 
		{
			sm: {span: 7},
			md: {span: 5},
			lg: {span: 4},
			xl: {span: 3},
			xxl: {span: 2}
		},
		wrapperCol:
		{
			sm: {span:23},
		}
	};
	const formInputButtonLayout =
	{
		labelCol: 
		{
			sm: {},
		},
		wrapperCol:
		{
			sm: {},
		}
	};
	return (
		<main className="Contact">
			<h1 className = "contact_info_title">Contact Us</h1>
			<div className="contact_info_information">
				
				<span className="contact_info_company_title">
					Insight Management and Rentals
				</span>
				<span>
					Address:
					230 West 3rd St., Suite 216
					Davenport, IA, 52801
				</span>
				<span>
					Email: joeerenberger@gmail.com
				</span>
				<span>
					Phone: <a href="tel:1-309-292-2777" className="phone_link">(309)-292-2777</a>
				</span>
			</div>
			<div className="contact_info_form_wrapper">
				<Form>
					{/* The form needs an onsubmit that sends an email to a specific place
						 but we'll cross that bridge when we get there */}
					<Form.Item label="First Name" {...formInputSmallLayout}>
						<Input className="contact_info_form_input" 
							placeholder="First Name" 
							required="true"/>
					</Form.Item>
					<Form.Item label="Last Name" {...formInputSmallLayout}>
						<Input className="contact_info_form_input" 
							placeholder="Last Name" 
							required="true"/>
					</Form.Item>
					<Form.Item label="E-Mail" {...formInputSmallLayout}
						help="Needs to contain an @">
						<Input className="contact_info_form_input" 
							placeholder="E-Mail" 
							required="true" 
							type="email"/>
					</Form.Item>
					<Form.Item label="Phone" {...formInputSmallLayout}
						help="Format (123)-123-1234, please.">
						<Input className="contact_info_form_input" 
							placeholder="Phone Number" 
							required="true" 
							pattern="^\(?([0-9]{3})?\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$"
							message="Read the message under the box, please."/>
					</Form.Item>
					<Form.Item label="Your Message" {...formInputLargeLayout}>
						<Input.TextArea className="contact_info_form_input_large" 
							rows={4} 
							placeholder="Please give us a description of the type of property you are seeking. Area,size,etc.." 
							required="true"/>
					</Form.Item>
					<Form.Item {...formInputButtonLayout}>
						<Button
							type="primary"
							htmlType="submit"
							className="submit contact_info_form_button"
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