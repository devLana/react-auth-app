import React from "react";
import { PropTypes } from "prop-types";
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn } from "../../utils/auth";
import constants from "../../utils/Constants";

const AuthenticateRoutes = ({ component: Component, path, exact }) => {
  const userIsLoggedIn = isLoggedIn();

  if (!userIsLoggedIn) {
    return <Redirect to={constants.LOGIN_ROUTE} />;
  }

  return (
    <Route path={path} exact={exact}>
      <Component />
    </Route>
  );
};

AuthenticateRoutes.propTypes = {
  component: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
};

export default AuthenticateRoutes;
