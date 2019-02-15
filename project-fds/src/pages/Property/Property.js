import React from "react";
import { Collapse } from "antd";
import Slideshow from "./Slideshow";
import "./style.css";

const Panel = Collapse.Panel;
const text = "Hello my name is Geon";
const Property = () => {

	return (

		<main className="Property">

			<div className="specific_prop_container">
				<div className="title"><h1>Property Title</h1></div>
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

export default Property;