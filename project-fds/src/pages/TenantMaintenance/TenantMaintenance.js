import React, { Component } from "react";
import PropTypes from "prop-types";
import DocumentTitle from "react-document-title";

import {
	Form, Input, DatePicker, Cascader, Button,message,
} from "antd";

import "./style.css";

const call = [{
	value: true,
	label: "Yes",
}, {
	value: false,
	label: "No",
}];

class TenantMaintenance extends Component {

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err) => {
			if (!err) {
				message.success("Your form has been submitted successfully");
				this.props.form.resetFields();
			}
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: {
				xs: { span: 1 },
				sm: { span: 11 },
				md: { span: 9 },
				lg: { span: 8},
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 },
			},
		};

		const tailFormItemLayout = {
			wrapperCol: {
				xs: {pull: 3,
					span:1},
				sm: { push: 3,
					span:1, },
				md: { push: 13,
					span:1},
				ld: {push: 10,
					span:1},
			},
		};

		const config = {
			rules: [{ type: "object", required: true, message: "Please select time!" }],
		};

		return (
			<main className="TenantMaintenance">
				<DocumentTitle title="Tenant Maintenance" />
				<div className="title"><h1>Maintenance Request</h1></div>
				<form onSubmit={this.handleSubmit}>

					<Form.Item
						{...formItemLayout}
						label="First Name"
					>
						{getFieldDecorator("field_first_name", {
							rules: [{
								required: true,
								message: "Please input your first name."
							}],
						})(
							<Input placeholder="First Name" />
						)}
					</Form.Item>

					<Form.Item
						{...formItemLayout}
						label="Last Name"
					>
						{getFieldDecorator("field_last_name", {
							rules: [{
								required: true,
								message: "Please input your last name."
							}],
						})(
							<Input placeholder="Last Name" />
						)}
					</Form.Item>

					<Form.Item
						{...formItemLayout}
						label="Address"
					>
						{getFieldDecorator("field_address", {
							rules: [{
								required: true,
								message: "Please input the address that needs maintenance."
							}],
						})(
							<Input placeholder="Address" />
						)}
					</Form.Item>

					<Form.Item
						{...formItemLayout}
						label="Maintenance"
					>
						{getFieldDecorator("field_maintenance", {
							rules: [{
								required: true,
								message: "Please input the maintenance that is needed."
							}],
						})(
							<Input.TextArea rows={4} placeholder="What maintenance needs to be done." spellCheck='default' />
						)}
					</Form.Item>

					<Form.Item
						{...formItemLayout}
						label="Best Date For Maintenance"
					>
						{getFieldDecorator("date-picker", config)(
							<DatePicker />
						)}
					</Form.Item>


					<Form.Item
						{...formItemLayout}
						label="E-mail"
					>
						{getFieldDecorator("email", {
							rules: [{
								type: "email", message: "The input is not valid E-mail!",
							}, {
								required: false, message: "Please input your E-mail!",
							}],
						})(
							<Input placeholder="E-mail" />
						)}
					</Form.Item>


					<Form.Item
						{...formItemLayout}
						label="Should we call ahead"
					>
						{getFieldDecorator("call_ahead", {
							initialValue: [true],
						})(
							<Cascader options={call} />
						)}
					</Form.Item>
					<Form.Item
						{...formItemLayout}
						label="Phone Number"
					>
						{getFieldDecorator("phone", {
							rules: [{ required: true, message: "Please input your phone number!" }],
						})(
							<Input placeholder="Phone Number" style={{ width: "100%" }} />
						)}
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit" className="submit">Submit</Button>
					</Form.Item>
				</form>
			</main>
		);
	}
}

TenantMaintenance.propTypes = {
	form: PropTypes.any,
};


export default Form.create()(TenantMaintenance);