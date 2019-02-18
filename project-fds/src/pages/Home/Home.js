import React from "react";
import { Carousel } from "antd";
import { Card } from "antd";
import image from "../../assets/images/250.jpg";

import "./style.css";

const Home = () => {

	return (

		<div className="Home">

			<div className="carousel">
				<Carousel className="height" autoplay>
					<div className="height"><h3>1</h3></div>
					<div className="height"><h3>2</h3></div>
					<div className="height"><h3>3</h3></div>
					<div className="height"><h3>4</h3></div>
				</Carousel>
			</div>
			<div className="title"><h1>Top Properties</h1></div>
			<div className="home_cards">
				<Card
					title="Property Name"
					extra={<a href="#">More</a>}
					style={{ width: 250}}
					className="home_card"
				>
					<img src={image} alt="image" />
				</Card>

				<Card
					title="Property Name"
					extra={<a href="#">More</a>}
					style={{ width: 250}}
					className="home_card"
				>
					<img src={image} alt="image" />
				</Card>

				<Card
					title="Property Name"
					extra={<a href="#">More</a>}
					style={{ width: 250 }}
					className="home_card"
				>
					<img src={image} alt="image" />
					
				</Card>

				<Card
					title="Property Name"
					extra={<a href="#">More</a>}
					style={{ width: 250 }}
					className="home_card"
				>
					<img src={image} alt="image" />
				</Card>
			</div>
		</div>
	);
};

export default Home;