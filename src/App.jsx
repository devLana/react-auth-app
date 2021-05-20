import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthenticateRoutes from "./Components/ProtectedRoutes/AuthenticateRoutes";
import AuthenticateLanding from "./Components/ProtectedRoutes/AuthenticateLanding";
import Dashboard from "./pages/Dashboard";
import LogIn from "./pages/LogIn";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import constants from "./utils/Constants";

const App = () => (
  <Router>
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
        <LogIn />
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

export default App;
