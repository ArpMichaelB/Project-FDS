import React from "react";

import "./style.css";
import { PropTypes } from "prop-types";
import ShowProperty from "./ShowProperty";
import ShowPNF from "./ShowPNF";
import DocumentTitle from "react-document-title";
import Sec from "../../hoc/sec/Sec";


// var propertyIndex;
var pageShown = false;
const Property = (props) => {
	let pageParameter = props.match.params.name;
	var countdown = properties.length;
	return (
		<main className="Property">

			<div className="specific_prop_container">
				{
					properties.map((property, index) => {
						
						--countdown;
						
						if (property.name === pageParameter) {
							pageShown = true;
							return (

								<Sec key={index}>
									<ShowProperty property={property} key={property.name} />
									<DocumentTitle title={property.title} />
								</Sec>
							);

						}
						else if( countdown < 0 ) {
							pageShown = false;
							return <ShowPNF key={property.name} pageShown={pageShown} />;
						}

						else{
							return(null);
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
		name: "Halligan",
		fileStart: "Halligan",
		title: "Halligan Lofts",
		desc: "Halligan Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
		history: 
			`The Halligan Coffee Company Building is an example of a Classical RevivalStyle commercial 
			block located in historic warehouse district. The buildingwas designed by the Davenport 
			firm of Temple, Burrows and McLane anderected in 1907. It is constructed of reddish-colored 
			pressed brick andmatching red mortar on the primary facades and common  brick. 
			Thebuilding was used as warehouse and sales office for the Halligan CoffeeCompany. 
			Y & J Development completed a historic rehab of 45 new loft unitsin 2015.`
	},

	{
		name: "Andresen",
		fileStart: "Andresen",
		title: "Andresen",
		desc: "Halligan Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
		history: 
			`The Andresen Apartments is a double colonial revival 12-unit apartmentbuilding located at 602 W 
			3rd St Davenport Iowa. The building was originallybuilt for businessman H.H. Andresen
			and designed by the firm   of   F.G.Clausen. Both Andresen and Clausen   
			were both 19th  Century Germanimmigrants. The property was historically rehabbed by 
			Y&J DevelopmentGroup in 2015. Y&J fully restored the building into 25   
			high end loftapartments.`
	},

	{
		name: "Bucktown",
		fileStart: "bucktown",
		title: "Bucktown",
		desc: "Halligan Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
		history: 
			`Bucktown Center of Arts Building was originally built as grocery wholesalerknown as 
			the John F Kelly Company in 1910. The building was an earlycomponent of what would 
			become a very substantial presence of wholesalefood warehouses in downtown Davenport. 
			This part of town was known as“Bucktown” a wilding place where all desires that 
			were prohibited elsewhere,were fulfilled. Y & J Development has plans to start a 
			historic rehab of 21 loftunits in spring 20`
	},

	{
		name: "Gordon",
		fileStart: "gordon",
		title: "Gordon Van-Tine Lofts",
		desc: "Halligan Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
		history: 
			`The Gordon Van Tine Company, and its parent company U.N. Roberts, playeda significant role in the 
			early history of the lumber industry in Davenport Iowa. The industry helped fuel the community’s 
			early prosperity.   TheGordon Van Tine warehouse and office building were built in 1907. 
			GordonVan Tine specialized in selling precut/kit housing which became a nationalphenomenon 
			in the early 20th  Century. In May 2019 Y & J completed itshistoric rehab of 113 high end loft 
			units and 60,000 square feet ofcommercial space.`
	},

	{
		name: "Livery",
		fileStart: "Livery",
		title: "Livery at Hineria Hall",
		desc: "Halligan Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
		history: 
			`The Philip H. Worley house, is a rare surviving example of the earlysettlement era (1839-1869) 
			construction in the central business district ofDavenport. The house was originally built for 
			Dr. Phillip H. and Justina MWorley family to reside as well as a central location for Dr. 
			Worleys office. The livery stable was constructed next to the house and was used forautomobile 
			service and and storage. Y&J Development historically rehabbedthe house in 2016. The livery was 
			also a historic rehab that converted thebuilding into six high up and down lofts.`
	},

	{
		name: "Peterson",
		fileStart: "Peterson",
		title: "Peterson Lofts",
		desc: "Halligan Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
		history:
			`The Peterson Paper building which was originally the Davenport Bag andPaper Company. 
			The building was built as warehouse for the Davenport Bagand Paper Company in 1907. 
			It’s a five-story concrete block structure, builton a concrete foundation overlooking the 
			Mississippi River. The building wasconstructed of concrete because of the concern of fires 
			destroying buildingsin the early 1900s. The building was designed by architects Gustav 
			Hansenand Dietrich Harfst. The buildings design was influenced by Chicagoarchitecture 
			which was demonstrated using Chicago style windows in theupper floors.`
	},
];

export default Property;