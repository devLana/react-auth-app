import React, { Suspense, lazy, useState, useEffect, useCallback } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import AuthenticateRoutes from "./Components/ProtectedRoutes/AuthenticateRoutes";
import AuthenticateLanding from "./Components/ProtectedRoutes/AuthenticateLanding";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import constants from "./utils/Constants";
import { getUser, logOut } from "./utils/auth";
import get from "./service/get";
import "./index.scss";

const Dashboard = lazy(() => {
  return import(/* webpackChunkName: "Dashboard" */ "./pages/Dashboard");
});

const Profile = lazy(() => {
  return import(/* webpackChunkName: "Profile" */ "./pages/Profile");
});

const App = () => {
  const [loading, setLoading] = useState(true);

  const { push } = useHistory();

  const redirectToLogin = useCallback(() => {
    push(constants.LOGIN_ROUTE);
  }, [push]);

  useEffect(() => {
    const user = getUser();
    const token = user?.token;

    if (token) {
      get(constants.apiVerifyToken(token))
        // .then(() => null)
        .catch(err => {
          alert(err.response.data.message);
          logOut(redirectToLogin);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [redirectToLogin]);

  if (loading) {
    return <div className="loader__text">Loading...</div>;
  }

  return (
    <>
      <Suspense fallback={<div className="loader__text">Loading...</div>}>
        <Switch>
          <AuthenticateLanding path={constants.LANDING_ROUTE} exact />
          <AuthenticateRoutes
            component={Dashboard}
            path={constants.DASHBOARD_ROUTE}
            exact
          />
          <Route path={constants.SIGN_UP_ROUTE} exact>
            <SignUp />
          </Route>
          <Route path={constants.LOGIN_ROUTE} exact>
            <Login />
          </Route>
          <AuthenticateRoutes
            component={Profile}
            path={constants.PROFILE_ROUTE}
            exact
          />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
