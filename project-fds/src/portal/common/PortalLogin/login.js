import React, { PureComponent }  from "react";
import PropTypes from "prop-types";
import logo from "../../../assets/images/logo.jpg";
import Sec from "../../../hoc/sec/Sec";
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../../actions';
import { connect } from 'react-redux';

import {
	Form, Icon, Input, Button, Checkbox,
} from "antd";

import "./style.css";

class Login extends PureComponent {

	static get propTypes() {
		return {
			form: PropTypes.any
		};

	}

	handleFormSubmit({ email, pass }) {
        this.props.signinUser({ email, pass })
    }

    renderError() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                <h2>Oops! {this.props.errorMessage}</h2>
                </div>
            );
        }
    }

	// handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	this.props.form.validateFields((err, values) => {
	// 		if (!err) {
	// 			// eslint-disable-next-line no-console
	// 			console.log("Received values of form: ", values);
	// 		}
	// 	});
	// }


	render() {

		const { getFieldDecorator } = this.props.form;
		const { handleSubmit } = this.props;


		return (

			<Sec>
				<div className="login_logo">
					<img src={logo} className="logo_width" alt="Y&J Logo" />

				</div>
				<div className="login_content">
					<h1>Portal Login</h1>
					{/* <Form onSubmit={this.handleSubmit} className="login-form">
						<Form.Item>
							{getFieldDecorator("email", {
								rules: [{ required: true, message: "Please input your Email!" }],
							})(
								<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="email" />
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator("password", {
								rules: [{ required: true, message: "Please input your Password!" }],
							})(
								<Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="Password" />
							)}
						</Form.Item>
						<a className="login-form-forgot forgot" href="/">Forgot password</a>
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
					</Form> */}

<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field className="form-control" name="email" component="input" type="text" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field className="form-control" name="pass" component="input" type="password" />
                </fieldset>
                {this.renderError()}
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
				</div>
			</Sec>
		);
	}
}

// const LoginForm = Form.create({ name: "normal_login" })(Login);

// export default LoginForm;

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error }
};

export default reduxForm({
    form: 'signin'
})(connect(mapStateToProps, actions)(Login));