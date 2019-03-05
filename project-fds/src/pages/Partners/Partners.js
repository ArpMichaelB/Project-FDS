import React, { Component } from "react";
import loadingImage from "../../assets/loading_image.gif";
import DocumentTitle from "react-document-title";
import "./style.css";
import Card from "antd/lib/card";

const { Meta } = Card;

class Partners extends Component {
	render(){
		return(
			<div>
				<DocumentTitle title="Commercial Partners" />
				<div className="title"><h1>Commercial Partners</h1></div>
				{partner_list.map(partner => {
					return(
						<div key={partner.name} className="property">
							<Card style={{ width: "100%", marginRight: "auto", marginLeft: "auto", marginBottom: "2rem" }} cover={<img alt={partner.title} src={partner.src} />}>
								<Meta
									title={partner.title} />
								<br />
								<p>{partner.desc}</p>
							</Card>
						</div>
					);
				})}
			</div>
		);
	}
}

const partner_list = [
	{
		name: "Gordon",
		title: "Gordon Van-Tine Lofts: Commercial Building",
		src: loadingImage,
		desc:
		<span style={{textAlign:"left", display:"block"}}>
			-Tenant: Isabel Bloom (production and retail center)<br />
			-Legal Aid<br />
			-Little Love Chiropractice<br />
			-2 commercial vacancies<br />
			-7 AirBB Sleep Room Accommodations - Listed on AIRBB website`
		</span>,
		location: "736 Federal St. Ste 2303 Davenport, IA. 52803",
	},
	{
		name: "429",
		title: "429 E. 3rd St.",
		src: loadingImage,
		desc:
		<span style={{textAlign:"left", display:"block"}}>
			-Ruby&#39;s Beer, Brats & Bikes.<br />
			-LoPies Pizzeria
		</span>,
		location: "",
	},
	{
		name: "JavaJava",
		title: "Java Java Coffee",
		src: loadingImage,
		desc: "",
		location: "836 E. River Dr. Davenport, IA. 52803",
	},
	{
		name: "Riverside",
		title: "Riverside Grocery",
		src: loadingImage,
		desc: "",
		location: "826 E. River Dr. Davenport, IA. 52803",
	},
	{
		name: "RiverAction",
		title: "River Action",
		src: loadingImage,
		desc: "822 E. River Dr. Davenport, IA. 52803",
		location: "",
	},
	{
		name: "StandardOil",
		title: "Standard Oil Building",
		src: loadingImage,
		desc: 
		<span style={{textAlign:"left", display:"block"}}>
			- Trinity<br />
			-Polish Hair Salon<br />
			-Customer Contact Solution<br />
			-Davenport School of Yoga
		</span>,
		location: "735 Federal St. Davenport, IA. 52803",
	}
];

export default Partners;