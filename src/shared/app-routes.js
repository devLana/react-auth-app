import constants from "../app/utils/Constants";

const routes = [
  {
    path: constants.LANDING_ROUTE,
    exact: true,
  },
  {
    path: constants.LOGIN_ROUTE,
    exact: true,
  },
  {
    path: constants.SIGN_UP_ROUTE,
    exact: true,
  },
  {
    path: constants.DASHBOARD_ROUTE,
    exact: true,
  },
  {
    path: constants.PROFILE_ROUTE,
    exact: true,
  },
];

export default routes;
