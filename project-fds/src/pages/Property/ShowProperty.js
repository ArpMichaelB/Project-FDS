import React from "react";
import { Collapse } from "antd";
import Slideshow from "./Slideshow";
import "./style.css";
import { PropTypes } from "prop-types";
const Panel = Collapse.Panel;

const ShowProperty = (props) => {
	return (
		<div>
			<div className="title"><h1>{props.property.title}</h1></div>

			<Slideshow />

			<Collapse accordion>
				<Panel header="Description" key="1">
					<p>{props.property.desc}</p>
				</Panel>
				<Panel header="Rent Includes" key="2">
					<p>{props.property.rentinc}</p>
				</Panel>
				<Panel header="Amenities" key="3">
					<p>{props.property.amenities}</p>
				</Panel>

			</Collapse>
		</div>

	);

};

ShowProperty.propTypes = {
	property: PropTypes.any.isRequired,
	title: PropTypes.any,
	name: PropTypes.any,
	desc: PropTypes.any,
	rentinc: PropTypes.any,
	amenities: PropTypes.any
};

export default ShowProperty;