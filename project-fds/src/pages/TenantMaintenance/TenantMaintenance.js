import React, {Component} from "react";
import {
	Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button,
} from 'antd';

import "./style.css";

const {Option} = Select;

class TenantMaintenance extends Component {

	// constructor(props){
		// super(props);

		state = {
			first_name: '',
			last_name: '',
			address: '',
			maintenance_need: '',
			date: '',
			email: '',
			call_ahead: true,
			phone_number: '',
		} 
	// }

	handle_change(event){
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err){
				console.log("Submit maintenance to backend here");
			}
		});
	}

	handleConfirmBlur = (e) => {
		const value = e.target.value;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	  }

	render() {
		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: {
			  xs: { span: 24 },
			  sm: { span: 8 },
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
				span: 16,
				offset: 8,
			  },
			},
		  };

		  const prefixSelector = getFieldDecorator('prefix', {
			initialValue: '1',
		  })(
			<Select style={{ width: 70 }}>
			  <option value="1">+1</option>
			  {/* <Option value="87">+87</Option> */}
			</Select>
		  );

		return (
			<main className="TenantMaintenance">
				<h1>TenantMaintenance Page</h1>
				<form onSubmit={this.handleSubmit}>
				<Form.Item
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Password"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Confirm Password"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label={(
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Phone Number"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Register</Button>
        </Form.Item>
					{/* <label>
						First Name: 
						<input name="first_name" type="text" value={this.state.first_name} onChange={this.handle_change}/>
					</label>
					<label>
						Last Name: 
						<input name="last_name" type="text" value={this.state.last_name} onChange={this.handle_change}/>
					</label>
					<label>
						address: 
						<input name="address" type="text" value={this.state.address} onChange={this.handle_change}/>
					</label>
					<label>
						What maintenance needs to be done: 
						<textarea name="maintenance" value={this.state.maintenance_need} onChange={this.handle_change}/>
					</label>
					<label>
						Best date to perform the maintenance: 
						<input name="date" type="text" value={this.state.date} onChange={this.handle_change}/>
					</label>
					<label>
						Email: 
						<input name="email" type="text" value={this.state.email} onChange={this.handle_change}/>
					</label>
					<label>
						Would you like us to call ahead: 
						<select name="call_ahead" value={this.state.call_ahead}>
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</label>
					<input type="submit" value="Submit"/> */}
				</form>
			</main>
		);
	};
}


export default Form.create()(TenantMaintenance);