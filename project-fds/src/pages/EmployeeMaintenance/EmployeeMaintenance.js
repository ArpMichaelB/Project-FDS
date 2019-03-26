import React, { Component } from "react";
import PropTypes from "prop-types";
// import moment from "moment";
import aws4 from "aws4";
import axios from "axios";
import DocumentTitle from "react-document-title";
import {
	Form, Input, DatePicker, Button, message,
} from "antd";

import "./style.css";

// let config = {
// 	headers:{
// 		"x-api-Key": "uQ7ipyNhNb7xNSNJr65Hy3JvplPPXmF49FwTNIRg",
// 		"Content-Type": "application/json"
// 	}
// };

class EmployeeMaintenance extends Component {

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err,values) => {
			if (!err) {
				let body = {
					operation: "update",
					date_requested: 1549157424,
					date_started: values["date-start"].unix(),
					date_finished: values["date-end"].unix(),
					requester_name: "Lhito ya boi",
					address: "new address",
					request_body:"Caleb's water pipe is still dang broken",
					employee_comments:values["Comments"],
					employee: values["field_name"],
					id:3
				};

				const opts = {
					method: "PUT",
					service: "execute-api",
					region: "us-east-1",
					path: "/default/maintenancerequest",
					host: "shr4ny5edi.execute-api.us-east-1.amazonaws.com",
					headers:{
						"x-api-Key": "uQ7ipyNhNb7xNSNJr65Hy3JvplPPXmF49FwTNIRg",
						"Content-Type": "application/json"
					},
					url: "https://shr4ny5edi.execute-api.us-east-1.amazonaws.com/default/maintenancerequest",
					data: body,
					body: JSON.stringify(body)
				};

				const request = aws4.sign(opts);
				delete request.headers.Host;
				delete request.headers["Content-Length"];

				axios(request)
					.then(()=> {
						message.success("Your maintenance request has been submitted successfully");
						this.props.form.resetFields();
					})
					.catch(err => {
						console.log(err);
					});

				// let timeTaken = Math.round(moment.duration(values["date-end"].diff(values["date-start"])).as("days"));
				// console.log(values);
				// console.log(timeTaken + " days");
				// console.log(values["date-start"].unix());
				// message.success("Your form has been submitted successfully");
				// const url = `https://shr4ny5edi.execute-api.us-east-1.amazonaws.com/default/maintenancerequest?operation=update&date_requested=1552920407&date_started=${values["date-start"].unix()}&date_finished=${values["date-end"].unix()}&requester_name=Geon&address=Yashtechnologieslane&request_body=Thisisalongurl&employee_comments=${values["Comments"]}&employee=${values["field_name"]}&id=${3}`;
				// axios.put(url,config)
				// 	.then(response => {
				// 		let data = response.data;
				// 		console.log(data);
				// 	})
				// 	.catch((error) => {
				// 		console.log(error);
				// 	});
				// this.props.form.resetFields();
				//sdfsdf
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

					{/* <Form.Item
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
					</Form.Item> */}

					{/* <Form.Item
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
					</Form.Item> */}

					{/* <Form.Item
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
					</Form.Item> */}

					{/* <Form.Item
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
					</Form.Item> */}

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
						{getFieldDecorator("date-end", {
							rules: [{ type: "object", required: false}]
						})(
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