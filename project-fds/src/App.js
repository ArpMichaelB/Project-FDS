import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import "../node_modules/antd/dist/antd.css";

import Sec from "../src/hoc/sec/Sec";
import Layout from "../src/hoc/Layout/Layout";
import Home from "../src/pages/Home/Home";
import Contact from "../src/pages/Contact/Contact";
import Properties from "../src/pages/Properties/Properties";
import Property from "../src/pages/Property/Property";
import AvailableProperties from "../src/pages/AvailableProperties/AvailableProperties";
import Gallery from "../src/pages/Gallery/Gallery";
import TMaintenance from "../src/pages/TenantMaintenance/TenantMaintenance";
import EMaintenance from "../src/pages/EmployeeMaintenance/EmployeeMaintenance";
import Partners from "./pages/Partners/Partners";

import "../src/styles/global.css";

class App extends Component {
	
	render() {
		let routes = (
			<Switch>
				<Route path="/home" component={Home} title="hello" />
				<Route path="/contact" component={Contact} />
				<Route path="/properties" component={Properties} />
				<Route path="/property/:name" component={Property} />
				<Route path="/available-properties" component={AvailableProperties} />
				<Route path="/gallery" component={Gallery} />
				<Route path="/partners" component={Partners} />
				<Route path="/tenant-maintenance" component={TMaintenance} />
				<Route path="/employee-maintenance" component={EMaintenance} />
				<Route path="/" exact component={Home} />
				<Redirect to="/" />
			</Switch>
		);

		return (
			<Sec>
				<Layout>
					{routes}
				</Layout>
			</Sec>
		);
	}
}

export default withRouter((App));

