import { useEffect, useState, Suspense, lazy, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import AuthenticateRoutes from "./Components/ProtectedRoutes/AuthenticateRoutes";
import AuthenticateLanding from "./Components/ProtectedRoutes/AuthenticateLanding";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import constants from "./utils/Constants";
import usersDB from "./utils/usersDB";
import { getUser } from "./utils/auth";

const Dashboard = lazy(() => {
  return import(/* webpackChunkName: "Dashboard" */ "./pages/Dashboard");
});

const Profile = lazy(() => {
  return import(/* webpackChunkName: "Profile" */ "./pages/Profile");
});

const App = () => {
  const [users, setUsers] = useState(usersDB);

  useEffect(() => {
    const user = getUser();

    if (user) {
      setUsers(state => [...state, user]);
    }
  }, []);

  const handleUsers = user => {
    setUsers([...users, user]);
  };

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
            <SignUp users={users} handleUsers={handleUsers} />
          </Route>
          <Route path={constants.LOGIN_ROUTE} exact>
            <Login users={users} />
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
