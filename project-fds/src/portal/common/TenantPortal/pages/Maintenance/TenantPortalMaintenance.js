import React, { Component } from "react";
import { Card } from "antd";
import PropTypes from "prop-types";
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

class TenantPortalMaintenance extends Component {

	static propTypes = {
		form: PropTypes.any
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err) => {
			if (!err) {
				message.success("Your form has been submitted successfully");
				this.props.form.resetFields();
			}
		});
	}

	render(){

		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: {
				xs: { span: 1 },
				sm: { span: 17 },
				md: { span: 11 },
				lg: { span: 8},
				xl: { span: 6}
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 },
			},
		};

		const tailFormItemLayout = {
			wrapperCol: {
				xs: {push: 1,
					span:1},
				sm: { push: 3,
					span:1, }
			},
		};

		const textareaLayout = {
			labelCol: {
				xs: { span: 1 },
				sm: { span: 15 },
				md: { span: 6 },
				lg: { span: 6},
				xl: { span: 6}
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 },
			}
		};

		const config = {
			rules: [{ type: "object", required: true, message: "Please select time!" }],
		};

		return(
			<div>
				<Card title="Maintenance Requests" bordered={false} className="maintenance_request_card">
					<h2>Maintenance Requets</h2>
				</Card>
				<Card title="Maintenance Request Form" bordered={false} className="maintenance_request_card">
					<h2>Maintenance Form</h2>
					<Form id="tenant_maintenance_form" {...formItemLayout} onSubmit={this.handleSubmit}>

						<Form.Item
							label="Maintenance"
							{...textareaLayout}
						>
							{getFieldDecorator("field_maintenance", {
								rules: [{
									required: true,
									message: "Please input the maintenance that is needed."
								}],
							})(
								<Input.TextArea autosize={{minRows:3}} className="tenant-maintenance-textarea" placeholder="What maintenance needs to be done." spellCheck='default' />
							)}
						</Form.Item>

						<Form.Item
							label="Best Date For Maintenance"
						>
							{getFieldDecorator("date-picker", config)(
								<DatePicker />
							)}
						</Form.Item>


						<Form.Item
							label="Should we call ahead"
						>
							{getFieldDecorator("call_ahead", {
								initialValue: [true],
							})(
								<Cascader style={{width: "150px"}} options={call} />
							)}
						</Form.Item>

						<Form.Item {...tailFormItemLayout}>
							<Button type="primary" htmlType="submit" className="submit">Submit</Button>
						</Form.Item>
					</Form>
				</Card>
			</div>
		);
	}
}


export default Form.create()(TenantPortalMaintenance);