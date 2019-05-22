import React from "react";
import { Route, Redirect } from "react-router-dom";
// import redirect
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("jwt")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/"></Redirect>;
        }
      }}
    />
  );
};

export default PrivateRoute;