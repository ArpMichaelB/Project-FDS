import React, { Component } from "react";
import PropTypes from "prop-types";
import DocumentTitle from "react-document-title";
import {
	Form, Input, DatePicker, Button, Radio, message,
} from "antd";

import "./style.css";

class EmployeeMaintenance extends Component {

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
				md: { span: 8 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 },
			},
		};

		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0,
				},
				sm: {
					span: 8,
					offset: 8,
				},
			},
		};

		const config = {
			rules: [{ type: "object", required: true, message: "Please select time!" }],
		};

		return (

			<main className="EmployeeMaintenance">
				<DocumentTitle title="Employee Maintenance" />
				<div className="title"><h1>Employee Maintenance</h1></div>
				<form onSubmit={this.handleSubmit}>

					<Form.Item
						{...formItemLayout}
						label="Name"
					>
						{getFieldDecorator("field_name", {
							rules: [{
								required: true,
								message: "Please input your name."
							}],
						})(
							<Input placeholder="Name" />
						)}
					</Form.Item>

					<Form.Item
						{...formItemLayout}
						label="Address Of Job"
					>
						{getFieldDecorator("field_address", {
							rules: [{
								required: true,
								message: "Please input the address that work was performed at"
							}],
						})(
							<Input placeholder="Address" />
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
								required: false,
							}],
						})(
							<Input placeholder="E-mail" />
						)}
					</Form.Item>

					<Form.Item
						{...formItemLayout}
						label="Job Status"
					>
						{getFieldDecorator("radio-group", {
							rules: [{
								required: true, message: "Please input the job status."
							}]
						})(
							<Radio.Group>
								<Radio value="finished">FINISHED</Radio>
								<Radio value="notstarted">NOT STARTED</Radio>
								<Radio value="unfinished">UN-FINISHED</Radio>
								<Radio value="ordered">ORDERED</Radio>
							</Radio.Group>
						)}
					</Form.Item>

					<Form.Item
						{...formItemLayout}
						label="Customer Satisfaction"
					>
						{getFieldDecorator("radio-group2", {
							rules: [{
								required: true, message: "Please input the Customer Satisfaction."
							}]
						})(
							<Radio.Group>
								<Radio value="very_satisfied">Very Satisfied</Radio>
								<Radio value="satisfied">Satisfied</Radio>
								<Radio value="unknown">Unknown</Radio>
								<Radio value="unsatisfied">Unsatisfied</Radio>
								<Radio value="very_unsatisfied">Very Unsatisfied</Radio>
							</Radio.Group>
						)}
					</Form.Item>

					<Form.Item
						{...formItemLayout}
						label="Date Job Started"
					>
						{getFieldDecorator("date-start", config)(
							<DatePicker />
						)}
					</Form.Item>

					<Form.Item
						{...formItemLayout}
						label="Comments"
					>
						{getFieldDecorator("Comments", {
							rules: [{
								required: true,
								message: "Please input comments on the job."
							}],
						})(
							<Input.TextArea rows={4} placeholder="Comments." spellCheck='default' />
						)}
					</Form.Item>

					<Form.Item
						{...formItemLayout}
						label="Date Job Completed"
					>
						{getFieldDecorator("date-end", config)(
							<DatePicker />
						)}
					</Form.Item>

					<Form.Item
						{...formItemLayout}
						label="Job Expenses"
					>
						{getFieldDecorator("expenses", {
							rules: [{
								required: false,
							}],
						})(
							<Input placeholder="Expenses" />
						)}
					</Form.Item>

					<Form.Item
						{...formItemLayout}
						label="Outside Contractor Price"
					>
						{getFieldDecorator("outside_contractor", {
							rules: [{
								required: false,
							}],
						})(
							<Input placeholder="Outside Contractor Expenses" />
						)}
					</Form.Item>

					<Form.Item
						{...formItemLayout}
						label="Other Info"
					>
						{getFieldDecorator("other_info", {
							rules: [{
								required: false,
							}],
						})(
							<Input placeholder="Other Info" />
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

EmployeeMaintenance.propTypes = {
	form: PropTypes.any,
};

export default Form.create()(EmployeeMaintenance);