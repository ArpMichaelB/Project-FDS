import React from "react";
import { Carousel } from "antd";

import "./style.css";

const Home = () => {

	return (

		<main className="Home">
			<div className="carousel">
				<Carousel className="height" autoplay>
					<div className="height"><h3>1</h3></div>
					<div className="height"><h3>2</h3></div>
					<div className="height"><h3>3</h3></div>
					<div className="height"><h3>4</h3></div>
				</Carousel>
			</div>
			<h1>Home Page</h1>
		</main>
	);
};

export default Home;