import React from "react";
import { Carousel, Card, Button } from "antd";
import { Link } from "react-router-dom";
import DocumentTitle from "react-document-title";

import "./style.css";

const Home = () => {

	return (

		<div className="Home">
			<DocumentTitle title="Y&G Development Group" />
			<div className="carousel">
				<Carousel className="height" autoplay>
					<div className="height"><img src="gallery/YandJ/GordonVan-Tine/gordon_interior16.jpg" width="100%" alt="gordonvan-tine"/></div>
					<div className="height"><img src="gallery/YandJ/GordonVan-Tine/gordon_interior2.jpg" width="100%" alt="gordonvan-tine"/></div>
					<div className="height"><img src="gallery/YandJ/GordonVan-Tine/gordon_interior20.jpg" width="100%" alt="gordonvan-tine"/></div>
					<div className="height"><img src="gallery/YandJ/Peterson/peterson_interior16.jpg" width="100%" alt="peterson"/></div>
				</Carousel>
			</div>
			<div className="group">
				<div className="title"><h1>Hot Properties</h1></div>
				<Link to="/available-properties" id="avail-button-link">
					<Button type="primary" className="avail-button">Available Properties</Button>
				</Link>
			</div>
			<div className="home_cards">
				<Card
					title="GordonVan-Tine"
					extra={<a href="/property/Gordon">More</a>}
					style={{ width: 303}}
					className="home_card"
				>
					<img src="gallery/YandJ/GordonVan-Tine/gordon_exterior13.jpg" width="300" height="250" alt="gordon_exterior" />
				</Card>

				<Card
					title="Halligan"
					extra={<a className="more_a" href="/property/Halligan">More</a>}
					style={{ width: 303}}
					className="home_card"
				>
					<img src="gallery/YandJ/Halligan/halligan_exterior1.PNG" width="300" height="250" alt="halligan_exterior" />
				</Card>

				<Card
					title="Peterson"
					extra={<a href="/property/Peterson">More</a>}
					style={{ width: 303 }}
					className="home_card"
				>
					<img src="gallery/YandJ/Peterson/peterson_exterior1.JPG" width="300" height="250" alt="peterson_exterior" />
					
				</Card>
			</div>
			<div style={{marginBottom:"20px"}}>
				<div className="title"><h1>Local Interests</h1></div>
				<div className="interest_cards">
					<a href="http://cityofdavenportiowa.com/" target="_blank" rel="noopener noreferrer">
						<Card
							title="City of Davenport"
							style={{ width: 200, height:210}}>
							<p>Upcomming events, attractions, opportunities, and government services in the Davenport area!</p>
						</Card>
					</a>
					<a href="http://www.visitquadcities.com/" target="_blank" rel="noopener noreferrer">
						<Card
							title="Visit Quad Cities"
							style={{ width: 200, height:210}}>
							<p>Events, activities, eateries, and trip information in the Quad Cities!</p>
						</Card>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;