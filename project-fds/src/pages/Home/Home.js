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
			<div id="home-bottom">
				<div id="top-titles">
					<div className="group">
						<div className="title home-title"><h1>Available Properties</h1></div>
						<Link to="/apply" id="avail-button-link">
							<Button type="primary" className="avail-button">Apply Now!</Button>
						</Link>
					</div>
					<div className="title" id="interests-title"><h1>Local Interests</h1></div>
				</div>
				<iframe className="show_mojo_listings-home" title="show_mojo_listings" src="https://showmojo.com/5f60af008e/listings/mapsearch" ></iframe>
				<div style={{marginBottom:"20px"}} id="home-right-column">
					<div className="interest_cards">
						<div className="title" id="interests-title-small"><h1>Local Interests</h1></div>
						<a href="http://cityofdavenportiowa.com/" className="localInterestA" target="_blank" rel="noopener noreferrer">
							<Card
								title="City of Davenport"
								style={{ width: 200, height:210}}>
								<p>Upcomming events, attractions, opportunities, and government services in the Davenport area!</p>
							</Card>
						</a>
						<a href="http://www.visitquadcities.com/" className="localInterestA" target="_blank" rel="noopener noreferrer">
							<Card
								title="Visit Quad Cities"
								style={{ width: 200, height:210}}>
								<p>Events, activities, eateries, and trip information in the Quad Cities!</p>
							</Card>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;