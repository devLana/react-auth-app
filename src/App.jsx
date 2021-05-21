import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthenticateRoutes from "./Components/ProtectedRoutes/AuthenticateRoutes";
import AuthenticateLanding from "./Components/ProtectedRoutes/AuthenticateLanding";
import Dashboard from "./pages/Dashboard";
import LogIn from "./pages/LogIn";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import constants from "./utils/Constants";
import usersDB from "./utils/usersDB";
import { getUser } from "./utils/auth";

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
    <Router>
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
          <LogIn users={users} />
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
    </Router>
  );
};

export default App;
