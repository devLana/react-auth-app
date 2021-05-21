import { Redirect } from "react-router-dom";
import Form from "../Components/Form";
import { isLoggedIn } from "../utils/auth";
import constants from "../utils/Constants";

const LogIn = () => {
  const userIsLoggedIn = isLoggedIn();

  return (
    <div>
      {userIsLoggedIn ? (
        <Redirect to={constants.LANDING_ROUTE} />
      ) : (
        <Form type="login" />
      )}
    </div>
  );
};

export default LogIn;
