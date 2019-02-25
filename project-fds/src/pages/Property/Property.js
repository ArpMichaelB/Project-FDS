import React from "react";

import "./style.css";
import { PropTypes } from "prop-types";
import ShowProperty from "./ShowProperty";
import ShowPNF from "./ShowPNF";


// var propertyIndex;
var pageShown = false;
const Property = (props) => {
	let pageParameter = props.match.params.name;
	var countdown = properties.length;
	return (
		<main className="Property">

			<div className="specific_prop_container">
				{

					properties.map((property) => {
						
						--countdown;
						
						if (property.name === pageParameter) {
							pageShown = true;
							return (
								<ShowProperty property={property} key={property.name} />
							);

						}
						else if( countdown < 0 ) {
							pageShown = false;
							return <ShowPNF key={property.name} pageShown={pageShown} />;
						}
					})
				}
				

				<ShowPNF pageShown={pageShown}/>

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
		fileStart: "Halligan",
		title: "Halligan Lofts",
		desc: "Halligan Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
	},

	{
		name: "Andresen",
		fileStart: "Andresen",
		title: "Andresen",
		desc: "Halligan Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
	},

	{
		name: "Bucktown",
		fileStart: "bucktown",
		title: "Bucktown",
		desc: "Halligan Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
	},

	{
		name: "Gordon",
		fileStart: "GordonVan-Tine",
		title: "Gordon Van-Tine Lofts",
		desc: "Halligan Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
	},

	{
		name: "Livery",
		fileStart: "Livery",
		title: "Livery at Hineria Hall",
		desc: "Halligan Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
	},

	{
		name: "Peterson",
		fileStart: "Peterson",
		title: "Peterson Lofts",
		desc: "Halligan Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
	},
];

export default Property;