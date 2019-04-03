/* eslint-disable quotes */
/* eslint-disable no-undef */
import React from "react";
import CardCover from "./CardCover";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";
import toJson from "enzyme-to-json";
import { Popconfirm } from "antd";

configure({adapter: new Adapter()});

jest.mock('axios');

axios.mockImplementation(() => {
	return Promise.resolve();
});

test("edit button should call axios", () => {
	let card = shallow(<CardCover bodyStyle={{}} classNameValue="" cover="" image={{}} remove={() => {}} index={0} />);

	let Edit = card.find(Popconfirm).get(0);
	Edit.props.onConfirm();

	expect(axios).toHaveBeenCalledTimes(1);
});

test("delete button should call axios", () => {
	let card = shallow(<CardCover bodyStyle={{}} classNameValue="" cover="" image={{}} remove={() => {}} index={0} />);

	let Delete = card.find(Popconfirm).get(1);
	Delete.props.onConfirm();
	
	expect(axios).toHaveBeenCalledTimes(2);
});

test("snapshot test", () => {
	let card = shallow(<CardCover bodyStyle={{}} classNameValue="" cover="" image={{}} remove={() => {}} index={0} />);

	let tree = toJson(card, {mode: "deep"});
	expect(tree).toMatchSnapshot();
});