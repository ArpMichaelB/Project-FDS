/* eslint-disable quotes */
/* eslint-disable no-undef */
import Gallery from "./Gallery";
import { Promise } from "q";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, configure } from "enzyme";
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

test("constructor should have called fetch", () => {
	shallow(<Gallery />);

	expect(global.fetch).toHaveBeenCalledTimes(1);
	expect(global.fetch).toHaveBeenCalledWith("https://shr4ny5edi.execute-api.us-east-1.amazonaws.com/default/image?operation=readAll");
});

test("cards should be created with 12 elements", async () => {

	let gallery = shallow(<Gallery />);
	await flushPromises();
	gallery.update();

	expect(gallery.state().cards.length).toBe(11);
});

test("clicking card should show modal", async () => {
	let gallery = mount(<Gallery />);
	await flushPromises();
	gallery.update();

	expect(gallery.state().visible).toBe(false);

	let card0 = gallery.find(".ant-card").first();
	card0.props().onClick();

	expect(gallery.state().visible).toBe(true);

	gallery.unmount();
});

test("snapshot test", async () => {
	const gallery = mount(<Gallery />);
	await flushPromises();
	gallery.update();

	let tree = toJson(gallery, {mode: "deep"});
	expect(tree).toMatchSnapshot();

	let card0 = gallery.find(".ant-card").first();
	card0.props().onClick();

	tree = toJson(gallery, {mode: "deep"});
	expect(tree).toMatchSnapshot();

	gallery.unmount();
});