import React from "react";
import { Carousel, Card, Button, Collapse } from "antd";
import { Link } from "react-router-dom";
import DocumentTitle from "react-document-title";
import "./style.css";

const Panel = Collapse.Panel;
const { Meta } = Card;

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
					<div className="interest_cards">
						<div className="title" id="properties-title"><h1>Properties</h1></div>
						<Card
							className="property-card-home"
							cover={<img alt="example" src="https://s3.amazonaws.com/fdsimagebucket/home-page-images/andresen_exterior1.JPG" />}
						>
							<Meta title="Andresen" style={{marginBottom: "0.6rem"}}/>
							<Collapse>
								<Panel header="History">
									<p>
										The Andresen Apartments is a double colonial revival 12-unit apartmentbuilding located at 602 W 
										3rd St Davenport Iowa. The building was originallybuilt for businessman H.H. Andresen
										and designed by the firm   of   F.G.Clausen. Both Andresen and Clausen   
										were both 19th  Century Germanimmigrants. The property was historically rehabbed by 
										Y&J DevelopmentGroup in 2015. Y&J fully restored the building into 25   
										high end loftapartments.
									</p>
								</Panel>
							</Collapse>
						</Card>
						<Card
							className="property-card-home"
							cover={<img alt="example" src="https://s3.amazonaws.com/fdsimagebucket/home-page-images/livery_exterior3.JPG" />}
						>
							<Meta title="Livery & House" style={{marginBottom: "0.6rem"}}/>
							<Collapse>
								<Panel header="History">
									<p>
										The Philip H. Worley house, is a rare surviving example of the earlysettlement era (1839-1869) 
										construction in the central business district ofDavenport. The house was originally built for 
										Dr. Phillip H. and Justina MWorley family to reside as well as a central location for Dr. 
										Worleys office. The livery stable was constructed next to the house and was used forautomobile 
										service and and storage. Y&J Development historically rehabbedthe house in 2016. The livery was 
										also a historic rehab that converted thebuilding into six high up and down lofts.
									</p>
								</Panel>
							</Collapse>
						</Card>
						<Card
							className="property-card-home"
							cover={<img alt="example" src="https://s3.amazonaws.com/fdsimagebucket/home-page-images/peterson_exterior1.JPG" />}
						>
							<Meta title="Peterson Paper Building" style={{marginBottom: "0.6rem"}}/>
							<Collapse>
								<Panel header="History">
									<p>
										The Peterson Paper building which was originally the Davenport Bag andPaper Company. 
										The building was built as warehouse for the Davenport Bagand Paper Company in 1907. 
										It’s a five-story concrete block structure, builton a concrete foundation overlooking the 
										Mississippi River. The building wasconstructed of concrete because of the concern of fires 
										destroying buildingsin the early 1900s. The building was designed by architects Gustav 
										Hansenand Dietrich Harfst. The buildings design was influenced by Chicagoarchitecture 
										which was demonstrated using Chicago style windows in theupper floors.
									</p>
								</Panel>
							</Collapse>
						</Card>
						<Card
							className="property-card-home"
							cover={<img alt="example" src="https://s3.amazonaws.com/fdsimagebucket/home-page-images/bucktown_exterior1.JPG" />}
						>
							<Meta title="Bucktown" style={{marginBottom: "0.6rem"}}/>
							<Collapse>
								<Panel header="History">
									<p>
										Bucktown Center of Arts Building was originally built as grocery wholesalerknown as 
										the John F Kelly Company in 1910. The building was an earlycomponent of what would 
										become a very substantial presence of wholesalefood warehouses in downtown Davenport. 
										This part of town was known as“Bucktown” a wilding place where all desires that 
										were prohibited elsewhere,were fulfilled. Y & J Development has plans to start a 
										historic rehab of 21 loftunits in spring 2020.
									</p>
								</Panel>
							</Collapse>
						</Card>
						<Card
							className="property-card-home"
							cover={<img alt="example" src="https://s3.amazonaws.com/fdsimagebucket/home-page-images/halligan_exterior1.PNG" />}
						>
							<Meta title="Halligan" style={{marginBottom: "0.6rem"}}/>
							<Collapse>
								<Panel header="History">
									<p>
										The Halligan Coffee Company Building is an example of a Classical RevivalStyle commercial 
										block located in historic warehouse district. The buildingwas designed by the Davenport 
										firm of Temple, Burrows and McLane anderected in 1907. It is constructed of reddish-colored 
										pressed brick andmatching red mortar on the primary facades and common  brick. 
										Thebuilding was used as warehouse and sales office for the Halligan CoffeeCompany. 
										Y & J Development completed a historic rehab of 45 new loft unitsin 2015.
									</p>
								</Panel>
							</Collapse>
						</Card>
						<Card
							className="property-card-home"
							cover={<img alt="example" src="https://s3.amazonaws.com/fdsimagebucket/home-page-images/gordon_exterior5.JPG" />}
						>
							<Meta title="GVT Lofts" style={{marginBottom: "0.6rem"}}/>
							<Collapse>
								<Panel header="History">
									<p>
										The Gordon Van Tine Company, and its parent company U.N. Roberts, playeda significant role in the 
										early history of the lumber industry in Davenport Iowa. The industry helped fuel the community’s 
										early prosperity.   TheGordon Van Tine warehouse and office building were built in 1907. 
										GordonVan Tine specialized in selling precut/kit housing which became a nationalphenomenon 
										in the early 20th  Century. In May 2019 Y & J completed itshistoric rehab of 113 high end loft 
										units and 60,000 square feet ofcommercial space.
									</p>
								</Panel>
							</Collapse>
						</Card>
						<Card
							className="property-card-home"
							cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
						>
							<Meta title="Hibernia Hall" style={{marginBottom: "0.6rem"}}/>
							<Collapse>
								<Panel header="History">
									<p>
										Hibernia Hall was built in 1889 for the ancient order of Hibernians. 
										TheHibernians were organized by Davenport Irish Catholics. 
										Hibernia Hall heldthe state Hibernian Convention in Davenport from 1885 to 1905. 
										HiberniaHall was considered one of the most valuable Hibernian properties in 
										thestate in the early 1900s.  The Hibernians used the hall space until 1937 when 
										the order was discontinued.  After the Hibernians the space was mainly usedas a 
										Church and then later for apartments. In 2019, Y&J Developerscompleted a 
										historic rehab of 11 loft units and two commercial spaces.
									</p>
								</Panel>
							</Collapse>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;