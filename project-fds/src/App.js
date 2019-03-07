import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";


import "../node_modules/antd/dist/antd.css";
import Layout from "../src/hoc/Layout/Layout";
import LoginLayout from "../src/hoc/Layout/LoginLayout";
import Home from "../src/pages/Home/Home";
import Contact from "../src/pages/Contact/Contact";
import Properties from "../src/pages/Properties/Properties";
import Property from "../src/pages/Property/Property";
import AvailableProperties from "../src/pages/AvailableProperties/AvailableProperties";
import Gallery from "../src/pages/Gallery/Gallery";
import TMaintenance from "../src/pages/TenantMaintenance/TenantMaintenance";
import EMaintenance from "../src/pages/EmployeeMaintenance/EmployeeMaintenance";
import Partners from "./pages/Partners/Partners";

import TenantPortalLayout from "./hoc/Layout/PortalLayout";
import UserPortalHome from "./portal/common/TenantPortal/pages/Home/UserPortalHome";
import Profile from "./portal/common/TenantPortal/pages/Profile/Profile";
import Maintenance from "./portal/common/TenantPortal/pages/Maintenance/Maintenance";
import Payments from "./portal/common/TenantPortal/pages/Payments/Payments";

import OurTeam from "../src/pages/OurTeam/OurTeam";
import Login from "../src/portal/common/PortalLogin/login";
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
			<AppRoute path="/tenant-maintenance" layout={Layout} component={TMaintenance} />
			<AppRoute path="/employee-maintenance" layout={Layout} component={EMaintenance} />
			<AppRoute path="/team" layout={Layout} component={OurTeam} />
			<AppRoute path="/partners" layout={Layout} component={Partners} />
			<AppRoute path="/tenant/home" layout={TenantPortalLayout} component={UserPortalHome} />
			<AppRoute path="/tenant/profile" layout={TenantPortalLayout} component={Profile} />
			<AppRoute path="/tenant/maintenance" layout={TenantPortalLayout} component={Maintenance} />
			<AppRoute path="/tenant/payments" layout={TenantPortalLayout} component={Payments} />
			<AppRoute path="/tenant" layout={TenantPortalLayout} component={UserPortalHome} />
			<AppRoute path="/login" layout={LoginLayout} component={Login} />
			<AppRoute path="/" exact layout={Layout} component={Home} />
			<Redirect to="/" />
		</Switch>
	</div>
);

AppRoute.propTypes = {
	component: PropTypes.any,
	layout: PropTypes.any,
};



export default withRouter((App));

