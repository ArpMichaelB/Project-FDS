import React from "react";
import DocumentTitle from "react-document-title";

import "./style.css";

const AvailableProperties = () => {

	return (

		<main className="AvailableProperties">
			<DocumentTitle title="Available Properties" />
			<div className="title"><h1>Available Properties</h1></div>
			
			<iframe className="show_mojo_listings" title="show_mojo_listings" src="https://showmojo.com/5f60af008e/listings/mapsearch" ></iframe>
			

		</main>
	);
};

export default AvailableProperties;