import { PropTypes } from "prop-types";
import { Route } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import Timeline from "../../pages/Timeline";
import { isLoggedIn } from "../../utils/auth";

const AuthenticateLanding = ({ path, exact }) => {
  const userIsLoggedIn = isLoggedIn();

  return (
    <Route exact={exact} path={path}>
      {userIsLoggedIn ? <Timeline /> : <LandingPage />}
    </Route>
  );
};

AuthenticateLanding.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
};

export default AuthenticateLanding;
