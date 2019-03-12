import React, { Component } from "react";
import loadingImage from "../../assets/loading_image.gif";
import DocumentTitle from "react-document-title";
import "./style.css";
import Card from "antd/lib/card";

const { Meta } = Card;

class Burlington extends Component {
	render(){
		return(
			<div>
				<DocumentTitle title="Commercial Partners" />
				<div className="title"><h1>Burlington Properties</h1></div>
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
		name: "Burlington Placeholder",
		title: "Burlington Placeholder",
		src: loadingImage,
		desc: "Placeholder",
		location: "Burlington",
	}
];

export default Burlington;