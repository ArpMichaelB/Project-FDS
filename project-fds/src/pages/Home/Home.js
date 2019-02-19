import React from "react";
import { Carousel, Card, Button } from "antd";
import { Link } from "react-router-dom";
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
			<div className="group">
				<div className="title"><h1>Hot Properties</h1></div>
				<Link to="/available-properties">
					<Button type="primary" className="avail-button">Available Properties</Button>
				</Link>
			</div>
			<div className="home_cards">
				<Card
					title="Property Name"
					extra={<a href="/">More</a>}
					style={{ width: 250}}
					className="home_card"
				>
					<img src={image} alt="test" />
				</Card>

				<Card
					title="Property Name"
					extra={<a className="more_a" href="/">More</a>}
					style={{ width: 250}}
					className="home_card"
				>
					<img src={image} alt="test" />
				</Card>

				<Card
					title="Property Name"
					extra={<a href="/">More</a>}
					style={{ width: 250 }}
					className="home_card"
				>
					<img src={image} alt="test" />
					
				</Card>

				<Card
					title="Property Name"
					extra={<a href="/">More</a>}
					style={{ width: 250 }}
					className="home_card"
				>
					<img src={image} alt="test" />
				</Card>
			</div>
		</div>
	);
};

export default Home;