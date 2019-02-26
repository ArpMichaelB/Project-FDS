import React from "react";
import "./style.css";
import { PropTypes } from "prop-types";

const ShowPNF = (props) => {
	var pageShown = props.pageShown;
	return (
		<div>
			{(() => {
				switch (pageShown) {
				case false: return <h1 className="title">Property not found</h1>;
				default: return null;
				}
			})()}

		</div>
	);
};

ShowPNF.propTypes = {
	pageShown: PropTypes.any,
};

export default ShowPNF;
