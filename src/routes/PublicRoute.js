import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import userProfile from "../component/pages/userProfile";
const PublicRoute = (props) => {

  const auth = useSelector((state) => state.AuthReducer);

  return (

    auth.isAuthenticated ? (
      <Route path="/" component={userProfile} />
    ) : (
      <Route path={props.path} component={props.component} />
    )

  );
};

export default PublicRoute;