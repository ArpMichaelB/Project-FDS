import React from "react";

import "./style.css";
import Card from "antd/lib/card";
import BuildingPic from "../../assets/BuildingPic.jpg";
import {Link} from "react-router-dom";
const { Meta } = Card;
const Properties = () => {

	return (

		<main className="Properties">
			<div className="title"><h1>All Properties</h1></div>
			{images.map((image) => {
				return (
					<div key={image.alt} className="property">
						<Link to={"property/" + image.title}>

							<Card hoverable style={{ width: "100%", marginRight: "auto", marginLeft: "auto", marginBottom: "2rem" }} cover={<img alt={image.alt} src={image.src} />}>
								<Meta
									title={image.title}
									description={image.desc} />
							</Card>

							
						</Link>
						
					</div>
				);

			})}
		</main>
	);
};

const images = [
	{
		alt: "Building",
		src: BuildingPic,
		title: "HalliganLofts",
		desc: "This is my Building",

	},

	{
		alt: "Building",
		src: BuildingPic,
		title: "Title Prop",
		desc: "This is my Building",

	},

	{
		alt: "Building",
		src: BuildingPic,
		title: "Title Prop",
		desc: "This is my Building",

	},
];

export default Properties;