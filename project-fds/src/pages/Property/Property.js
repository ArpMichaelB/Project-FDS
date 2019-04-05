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
		desc: 
			`Located at 402 E. 4th Street, Davenport, IA.
			Halligan contains 45 High End Lofts`,
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: 
			`Granite Countertops, Gym, Media
			Room, Storage Units, Bike Storage,
			Exposed Brick, River View, Stainless
			Steel Appliances`,
		history: 
			`The Halligan Coffee Company Building is an example of a Classical Revival Style commercial 
			block located in historic warehouse district. The building was designed by the Davenport 
			firm of Temple, Burrows and McLane and erected in 1907. It is constructed of reddish-colored 
			pressed brick and matching red mortar on the primary facades and common  brick. 
			The building was used as warehouse and sales office for the Halligan Coffee Company. 
			Y & J Development completed a historic rehab of 45 new loft units in 2015.`
	},

	{
		name: "Andresen",
		fileStart: "Andresen",
		title: "Andresen",
		desc: 
			`Located at 602-608 W. 3rd St., Davenport, IA. 
			Andresen contains 25 Loft Units`,
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "Hardwood Floors, River View, Stainless Steel Appliances",
		history: 
			`The Andresen Apartments is a double colonial revival 12-unit apartment building located at 602 W 
			3rd St Davenport Iowa. The building was originally built for businessman H.H. Andresen
			and designed by the firm of F.G. Clausen. Both Andresen and Clausen   
			were both 19th  Century German immigrants. The property was historically rehabbed by 
			Y&J Development Group in 2015. Y&J fully restored the building into 25   
			high end lof tapartments.`
	},

	{
		name: "Bucktown",
		fileStart: "bucktown",
		title: "Bucktown",
		desc: 
			`Located at 225 E. 2nd Street, Davenport, IA
			Bucktown contains 21 High End Lofts`,
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: 
			`Granite Countertops, Exposed Brick,
			River Views, Hardwood Floors, Stainless Steel Appliances`,
		history: 
			`Bucktown Center of Arts Building was originally built as grocery wholesaler known as 
			the John F Kelly Company in 1910. The building was an early component of what would 
			become a very substantial presence of wholesale food warehouses in downtown Davenport. 
			This part of town was known as “Bucktown” a wilding place where all desires that 
			were prohibited elsewhere, were fulfilled. Y & J Development has plans to start a 
			historic rehab of 21 loft units in spring 20`
	},

	{
		name: "Gordon",
		fileStart: "gordon",
		title: "Gordon Van-Tine Lofts",
		desc: 
			`Located at 736 Federal St, Davenport IA.
			GVT contains 113 High End Loft Units & 20,000
			Commercial Square Footage`,
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: 
			`Granite Countertops, Roof Top Pool,
			Media Room, Gym, Storage Units,
			Atriums, Roof Top Deck, Stainless
			Steel Appliances, Dog Park, Outdoor
			Grill Area`,
		history: 
			`The Gordon Van Tine Company, and its parent company U.N. Roberts, played a significant role in the 
			early history of the lumber industry in Davenport Iowa. The industry helped fuel the community’s 
			early prosperity.   The Gordon Van Tine warehouse and office building were built in 1907. 
			Gordon Van Tine specialized in selling precut/kit housing which became a national phenomenon 
			in the early 20th  Century. In May 2019 Y & J completed its historic rehab of 113 high end loft 
			units and 60,000 square feet of commercial space.`
	},

	{
		name: "Livery",
		fileStart: "Livery",
		title: "Livery at Hibernian Hall",
		desc: 
			`Located at 425 Brady Street, Davenport, IA. 
			Livery contains 6 High End Up Down Lofts`,
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: 
			`Granite Countertops, Polished
			Concrete floors, Exposed Brick,
			Stainless Steel Appliances`,
		history: 
			`The Philip H. Worley house, is a rare surviving example of the early settlement era (1839-1869) 
			construction in the central business district of Davenport. The house was originally built for 
			Dr. Phillip H. and Justina M Worley family to reside as well as a central location for Dr. 
			Worleys office. The livery stable was constructed next to the house and was used for automobile 
			service and and storage. Y&J Development historically rehabbed the house in 2016. The livery was 
			also a historic rehab that converted the building into six high up and down lofts.`
	},

	{
		name: "Peterson",
		fileStart: "Peterson",
		title: "Peterson Lofts",
		desc: 
			`Located at 301 E. 2nd Street, Davenport, IA.
			Peterson Lofts contain 23 High End Loft Units`,
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: 
			`Granite Countertops, Exposed Block
			Walls, River Views, River View
			Rooftop Deck, Polished Concrete
			Floors, Stainless Steel Appliances`,
		history:
			`The Peterson Paper building which was originally the Davenport Bag and Paper Company. 
			The building was built as warehouse for the Davenport Bag and Paper Company in 1907. 
			It’s a five-story concrete block structure, built on a concrete foundation overlooking the 
			Mississippi River. The building was constructed of concrete because of the concern of fires 
			destroying buildings in the early 1900s. The building was designed by architects Gustav 
			Hansenand Dietrich Harfst. The buildings design was influenced by Chicago architecture 
			which was demonstrated using Chicago style windows in the upper floors.`
	},
];

export default Property;