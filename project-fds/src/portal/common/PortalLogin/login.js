import React from "react";
import PropTypes from "prop-types";
import logo from "../../../assets/images/logo.jpg";
import Sec from "../../../hoc/sec/Sec";

import {
	Form, Icon, Input, Button, Checkbox,
} from "antd";

import "./style.css";

class Login extends React.Component {

	static get propTypes() {
		return {
			form: PropTypes.any
		};

	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				// eslint-disable-next-line no-console
				console.log("Received values of form: ", values);
			}
		});
	}


	render() {

		const { getFieldDecorator } = this.props.form;

		return (

			<Sec>
				<div className="login_logo">
					<img src={logo} className="logo_width" />

				</div>
				<div className="login_container">
					<h1>Portal Login</h1>
					<Form onSubmit={this.handleSubmit} className="login-form">
						<Form.Item>
							{getFieldDecorator("email", {
								rules: [{ required: true, message: "Please input your email!" }],
							})(
								<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username" />
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator("password", {
								rules: [{ required: true, message: "Please input your Password!" }],
							})(
								<Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="Password" />
							)}
							<a className="login-form-forgot forgot" href="">Forgot password</a>
						</Form.Item>
						<Form.Item>
							{getFieldDecorator("remember", {
								valuePropName: "checked",
								initialValue: true,
							})(
								<Checkbox className="check">Remember me</Checkbox>
							)}
							<br/><Button type="primary" htmlType="submit" className="login-form-button login_button">
								Log in
							</Button>
						</Form.Item>
					</Form>
				</div>
			</Sec>
		);
	}
}

const LoginForm = Form.create({ name: "normal_login" })(Login);

export default LoginForm;