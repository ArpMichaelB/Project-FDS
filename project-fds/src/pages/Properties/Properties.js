import React from "react";

import "./style.css";
import Card from "antd/lib/card";
import {Link} from "react-router-dom";
import AndresenPic from "../../assets/images/andresen_exterior1.JPG";
import BucktownPic from "../../assets/images/bucktown_exterior1.JPG";
import GordonPic from "../../assets/images/gordon_exterior1.JPG";
import HalliganPic from "../../assets/images/halligan_exterior1.PNG";
import LiveryPic from "../../assets/images/livery_exterior1.JPG";
import PetersonPic from "../../assets/images/peterson_exterior1.JPG";

const { Meta } = Card;

const Properties = () => {

	return (

		<main className="Properties">
			<div className="title"><h1>All Properties</h1></div>
			{properties.map((property) => {
				return (
					<div key={property.name} className="property">
						<Link to={"property/" + property.name}>

							<Card hoverable style={{ width: "100%", marginRight: "auto", marginLeft: "auto", marginBottom: "2rem" }} cover={<img alt={property.title} src={property.src} />}>
								<Meta
									title={property.title}
									description={property.desc} />
							</Card>

							
						</Link>
						
					</div>
				);

			})}
		</main>
	);
};

const properties = [
	{
		name: "HalliganLofts",
		fileStart: "Halligan",
		title: "Halligan Lofts",
		src: HalliganPic,
		desc: "Halligan Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
	},

	{
		name: "Andresen",
		fileStart: "Andresen",
		title: "Andresen",
		src: AndresenPic,
		desc: "Andresen Flats,Top Floor, Pet Friendly-Historic & Now Restored, Ready for Move in, Central Air, Hardwood floors",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
	},

	{
		name: "Bucktown",
		fileStart: "bucktown",
		title: "Bucktown",
		src: BucktownPic,
		desc: "Bucktown, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
	},

	{
		name: "Gordon",
		fileStart: "gordon",
		title: "Gordon Van-Tine Lofts",
		src: GordonPic,
		desc: "GVT Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
	},

	{
		name: "Livery",
		fileStart: "Livery",
		title: "Livery",
		src: LiveryPic,
		desc: "Livery Lofts Circa 1882- Restored Into Luxury Lofts- Located in the Heart of Downtown On Brady St",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
	},

	{
		name: "Peterson",
		fileStart: "Peterson",
		title: "Peterson Lofts",
		src: PetersonPic,
		desc: "Peterson Lofts, Newly Renovated, 2 Bedroom, River Views! w/d - Bike Room-Fitness Center- All Units Market Rate!",
		rentinc: "Pets negotiable Tenant pays all electric One year lease No smoking building Parking included Trash removal included Water included",
		amenities: "On-site manager Fitness center Bike room On-site engineer Lounge / club room",
	},
];

export default Properties;