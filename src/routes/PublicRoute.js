import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import userProfile from "../component/pages/userProfile";
import Feeds from "../component/pages/feeds";
const PublicRoute = (props) => {

  const auth = useSelector((state) => state.AuthReducer);

  return (

    auth.isAuthenticated ? (
      <Route path="/" component={Feeds} />
    ) : (
      <Route path={props.path} component={props.component} />
    )

  );
};

export default PublicRoute;