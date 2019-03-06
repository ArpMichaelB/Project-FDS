import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";


import "../node_modules/antd/dist/antd.css";
import Layout from "../src/hoc/Layout/Layout";
import Home from "../src/pages/Home/Home";
import Contact from "../src/pages/Contact/Contact";
import Properties from "../src/pages/Properties/Properties";
import Property from "../src/pages/Property/Property";
import AvailableProperties from "../src/pages/AvailableProperties/AvailableProperties";
import Gallery from "../src/pages/Gallery/Gallery";
import TMaintenance from "../src/pages/TenantMaintenance/TenantMaintenance";
import EMaintenance from "../src/pages/EmployeeMaintenance/EmployeeMaintenance";

import "../src/styles/global.css";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
	<Route {...rest} render={props => (
		<Layout>
			<Component {...props} />
		</Layout>
	)} />
);

const App = () => (
	<div>
		<Switch>
			<AppRoute path="/home" layout={Layout} component={Home} />
			<AppRoute path="/contact" layout={Layout} component={Contact} />
			<AppRoute path="/properties" layout={Layout} component={Properties} />
			<AppRoute path="/property/:name" layout={Layout} component={Property} />
			<AppRoute path="/available-properties" layout={Layout} component={AvailableProperties} />
			<AppRoute path="/gallery" layout={Layout} component={Gallery} />
			<AppRoute path="/tenant-maintenance"layout={Layout}  component={TMaintenance} />
			<AppRoute path="/employee-maintenance" layout={Layout} component={EMaintenance} />
			<AppRoute path="/" exact layout={Layout} component={Home} />
			<Redirect to="/" />
		</Switch>
	</div>
);

AppRoute.propTypes = {
	component:PropTypes.any,
	layout:PropTypes.any,
};


export default withRouter((App));

