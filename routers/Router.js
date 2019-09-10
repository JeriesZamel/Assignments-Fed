import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Body from "../Components/Body";
import UserProfile from "../Components/UserProfile/UserProfile";
import Settings from "../Components/Settings/Settings";
import PageNotFound from "../Components/PageNotFound";
import ProjectsData from "../Components/ProjectsData";
import AddRole from "../Components/Roles/AddRole";
import AssignHistory from "../Components/AssignHistory";
export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route path="/" component={Body} exact={true} />
        <Route path="/user-profile/" component={UserProfile} />
        <Route path="/settings" component={Settings} />
        <Route path="/add-role" component={AddRole} />
        <Route path="/Projects" component={ProjectsData} />
        <Route path="/Assign-History/:id" component={AssignHistory} />
        <Route component={PageNotFound} />
        {/* <Route path="/add-role" component={AddRole} /> */}
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);
