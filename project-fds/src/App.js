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
import Partners from "./pages/Partners/Partners";
import Commercial from "./pages/Commercial/Commercial";
import Burlington from "./pages/Burlington/Burlington";

import TenantPortalLayout from "./hoc/Layout/TenantPortalLayout";
import TenantPortalHome from "./portal/common/TenantPortal/pages/Home/TenantPortalHome";
import TenantPortalProfile from "./portal/common/TenantPortal/pages/Profile/TenantPortalProfile";
import TenantPortalMaintenance from "./portal/common/TenantPortal/pages/Maintenance/TenantPortalMaintenance";
import TenantPortalPayments from "./portal/common/TenantPortal/pages/Payments/TenantPortalPayments";

import MaintenancePortalLayout from "./hoc/Layout/MaintenancePortalLayout";
import MaintenancePortalHome from "./portal/common/MaintenancePortal/pages/Home/MaintenancePortalHome";
import MaintenancePortalDetail from "./portal/common/MaintenancePortal/pages/Detail/MaintenancePortalDetail";

import AdminPortalLayout from "./hoc/Layout/AdminPortalLayout";
import AdminPortalHome from "./portal/common/AdminPortal/pages/Home/AdminPortalHome";
import AdminPortalImages from "./portal/common/AdminPortal/pages/Images/AdminPortalImages";

import OurTeam from "../src/pages/OurTeam/OurTeam";
import Login from "../src/portal/common/PortalLogin/login";
import DBConnect from "../src/pages/dbConnect";
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
			<AppRoute path="/team" layout={Layout} component={OurTeam} />
			<AppRoute path="/maintenance" layout={Layout} component={TMaintenance} />
			<AppRoute path="/partners" layout={Layout} component={Partners} />
			<AppRoute path="/commercial" layout={Layout} component={Commercial} />
			<AppRoute path="/burlington" layout={Layout} component={Burlington} />
			<AppRoute path="/portal/tenant/home" layout={TenantPortalLayout} component={TenantPortalHome} />
			<AppRoute path="/portal/tenant/profile" layout={TenantPortalLayout} component={TenantPortalProfile} />
			<AppRoute path="/portal/tenant/maintenance" layout={TenantPortalLayout} component={TenantPortalMaintenance} />
			<AppRoute path="/portal/tenant/payments" layout={TenantPortalLayout} component={TenantPortalPayments} />
			<AppRoute path="/portal/tenant" layout={TenantPortalLayout} component={TenantPortalHome} />
			<AppRoute path="/portal/maintenance/home" layout={MaintenancePortalLayout} component={MaintenancePortalHome} />
			<AppRoute path="/portal/maintenance/details/:tenantName" layout={MaintenancePortalLayout} component={MaintenancePortalDetail} />
			<AppRoute path="/portal/maintenance" layout={MaintenancePortalLayout} component={MaintenancePortalHome} />
			<AppRoute path="/portal/admin/home" layout={AdminPortalLayout} component={AdminPortalHome} />
			<AppRoute path="/portal/admin/images" layout={AdminPortalLayout} component={AdminPortalImages} />
			<AppRoute path="/portal/admin" layout={AdminPortalLayout} component={AdminPortalHome} />
			<AppRoute path="/login" layout={LoginLayout} component={Login} />
			<AppRoute path="/dbConnect" layout={Layout} component={DBConnect} />
			<AppRoute path="/" layout={Layout} component={Home} />
			<Redirect to="/" />
		</Switch>
	</div>
);

AppRoute.propTypes = {
	component: PropTypes.any,
	layout: PropTypes.any,
};



export default withRouter((App));

