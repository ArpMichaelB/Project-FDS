import React from "react";
import { Collapse } from "antd";
import Slideshow from "./Slideshow";
import "./style.css";
import { PropTypes } from "prop-types";


const Panel = Collapse.Panel;
const text = "Hello my name is Geon";



const Property = (props) => {
	
	return (
		<main className="Property">

			<div className="specific_prop_container">
			
				<div className="title"><h1>{props.match.params.name}</h1></div>
				<Slideshow />

				<Collapse accordion>
					<Panel header="Description" key="1">
						<p>{text}</p>
					</Panel>
					<Panel header="Rent Includes" key="2">
						<p>{text}</p>
					</Panel>
					<Panel header="Amenities" key="3">
						<p>{text}</p>
					</Panel>

				</Collapse>
			</div>
		</main>


	);
};

Property.propTypes = {
	match: PropTypes.any.isRequired,
	params: PropTypes.any,
	name: PropTypes.any,
};

// const properties = [
// 	{
// 		name: "HalliganLofts",
// 		title: "Halligan Lofts",
// 		desc: "Halligan Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
// 		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
// 		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
// 	}
// ];

export default Property;