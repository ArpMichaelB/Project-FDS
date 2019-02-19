import React from "react";

import "./style.css";
import { PropTypes } from "prop-types";
import ShowProperty from "./ShowProperty";
import ShowPNF from "./ShowPNF";

const Property = (props) => {

	return (
		<main className="Property">

			<div className="specific_prop_container">
				{
					properties.map((property) => {
						if (property.name !== props.match.params.name) {
							return <ShowPNF key={property.name} />;

						}
						return <ShowProperty property={property} key={property.name} />;
					})
				}

			</div>
		</main>

	);
};

Property.propTypes = {
	match: PropTypes.any.isRequired,
	params: PropTypes.any,
	name: PropTypes.any,
};

const properties = [
	{
		name: "HalliganLofts",
		title: "Halligan Lofts",
		desc: "Halligan Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
	}
];

export default Property;