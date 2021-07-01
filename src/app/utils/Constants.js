function Constants() {
  this.LOGIN_ROUTE = "/login";
  this.SIGN_UP_ROUTE = "/signup";
  this.DASHBOARD_ROUTE = "/dashboard";
  this.LANDING_ROUTE = "/";
  this.PROFILE_ROUTE = "/:profile";

  this.baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://basic-auth-api.herokuapp.com/"
      : "http://localhost:3030/";

  this.API_SIGNUP = "api/signup";
  this.API_SIGNIN = "api/signin";
  this.API_SIGNOUT = "api/signout";
  this.apiVerifyToken = token => `api/verifyToken/${token}`;
}

const constants = new Constants();

export default constants;
