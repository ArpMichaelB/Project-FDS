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
						<Link to={"property/" + image.name}>

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
		title: "Halligan Lofts",
		name: "HalliganLofts",
		desc: "This is my Building",

	},

	{
		alt: "Building 1",
		src: BuildingPic,
		title: "Title  1",
		name: "Name 1",
		desc: "This is my Building",

	},

	{
		alt: "Building 2",
		src: "/gallery/YandJ/Andresen/andresen_exterior1.JPG",
		title: "Title 2",
		name: "Name 2",
		desc: "This is my Building",

	},
];

export default Properties;