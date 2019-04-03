/* eslint-disable quotes */
/* eslint-disable no-undef */
import React from "react";
import AdminPortalImages from "./AdminPortalImages";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CardCover from "./CardCover";
import { Input, Upload, Button } from "antd";
import axios from "axios";
import toJson from "enzyme-to-json";

configure({adapter: new Adapter()});

let dataString = "[";
for(let i = 0;i < 15;i++){
	dataString += '{"link":"","caption":"Bucktown","alt":"Bucktown","sitelocation":"Bucktown","id":' + i + '},';
}
dataString += '{"link":"","caption":"Bucktown","alt":"Bucktown","sitelocation":"Bucktown","id":' + 15 + '}]';

var data ={body:dataString};

const flushPromises = () => {
	return new Promise(resolve => setImmediate(resolve));
};

global.fetch = jest.fn().mockImplementation(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(data);
		}
	});
});

jest.mock('axios');

axios.mockImplementation(() => {
	return Promise.resolve();
});

var fakeReader = {
	readAsDataURL: () => {
		setTimeout({}, 1000);
		fakeReader.onload();
	},
	onload:null,
	result: "acsbase64,aoavbsaouvbwovb"
};

window.FileReader = jest.fn(() => fakeReader);

test("constructor should call fetch and create cards", async () => {
	let gallery = shallow(<AdminPortalImages />);
	await flushPromises();
	gallery.update();

	expect(global.fetch).toHaveBeenCalledTimes(1);
	expect(global.fetch).toHaveBeenCalledWith("https://shr4ny5edi.execute-api.us-east-1.amazonaws.com/default/image?operation=readAll");
	expect(gallery.state().cards.length).toBe(11);
});

test("calling remove should remove the card", async () => {
	let gallery = shallow(<AdminPortalImages />);
	await flushPromises();
	gallery.update();

	expect(gallery.state().cards.length).toBe(11);

	let card0 = gallery.find(CardCover).first();
	card0.props().remove();

	expect(gallery.state().cards.length).toBe(10);
});

test("inputs should save input value", async () => {
	let gallery = shallow(<AdminPortalImages />);
	await flushPromises();
	gallery.update();

	let inputs = gallery.find(Input);

	inputs.get(0).props.onChange({target:{value:"test0"}});
	gallery.update();
	expect(gallery.find(Input).get(0).props.value).toBe("test0");

	inputs.get(1).props.onChange({target:{value:"test1"}});
	gallery.update();
	expect(gallery.find(Input).get(1).props.value).toBe("test1");

	inputs.get(2).props.onChange({target:{value:"test2"}});
	gallery.update();
	expect(gallery.find(Input).get(2).props.value).toBe("test2");
});

test("before upload should add a file", async () => {
	let gallery = shallow(<AdminPortalImages />);
	await flushPromises();
	gallery.update();

	let upload = gallery.find(Upload);
	upload.props().beforeUpload("image");
	expect(gallery.state().files.length).toBe(1);
});

test("onRemove should remove a file", async () => {
	let gallery = shallow(<AdminPortalImages />);
	await flushPromises();
	gallery.update();

	let upload = gallery.find(Upload);
	upload.props().beforeUpload("image");
	expect(gallery.state().files.length).toBe(1);

	upload.props().onRemove("image");
	expect(gallery.state().files.length).toBe(0);
});

test("uploadImages should call axios, and only when it has all data", async () => {
	let gallery = shallow(<AdminPortalImages />);
	await flushPromises();
	gallery.update();

	let button = gallery.find(Button);
	button.get(1).props.onClick();

	expect(axios).toHaveBeenCalledTimes(0);

	let upload = gallery.find(Upload);
	upload.props().beforeUpload("test");

	let inputs = gallery.find(Input);

	inputs.get(0).props.onChange({target:{value:"test0"}});
	gallery.update();

	inputs.get(1).props.onChange({target:{value:"test1"}});
	gallery.update();

	inputs.get(2).props.onChange({target:{value:"test2"}});
	gallery.update();

	button.get(1).props.onClick();

	expect(axios).toHaveBeenCalledTimes(1);
});

test("snapshot test", async () => {
	let gallery = shallow(<AdminPortalImages />);
	await flushPromises();
	gallery.update();

	let tree = toJson(gallery, {mode: "deep"});
	expect(tree).toMatchSnapshot();

	let inputs = gallery.find(Input);
	inputs.get(0).props.onChange({target:{value:"test0"}});
	inputs.get(1).props.onChange({target:{value:"test1"}});
	inputs.get(2).props.onChange({target:{value:"test2"}});
	gallery.update();

	tree = toJson(gallery, {mode: "deep"});
	expect(tree).toMatchSnapshot();

	let card0 = gallery.find(CardCover).first();
	card0.props().remove();
	gallery.update();

	tree = toJson(gallery, {mode: "deep"});
	expect(tree).toMatchSnapshot();
});