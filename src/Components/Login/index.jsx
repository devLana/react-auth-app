import { Link, Redirect, useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import Form from "../Form";
import { isLoggedIn, setUser } from "../../utils/auth";
import constants from "../../utils/Constants";
import useDocTitle from "../../hooks/useDocTitle";
import "./index.scss";

const Login = ({ users }) => {
  const history = useHistory();

  useDocTitle("Log in");

  const userIsLoggedIn = isLoggedIn();

  const submitHandler = (values, setErrors) => {
    const errors = {};

    if (!values.username.trim()) {
      errors.username = "Enter username";
    }

    if (!values.password) {
      errors.password = "Enter password";
    }

    setErrors(errors);

    if (errors.username || errors.password) {
      return;
    }

    const userExists = users.find(({ username, password }) => {
      return (
        username === values.username.trim() && password === values.password
      );
    });

    if (userExists) {
      history.push(constants.LANDING_ROUTE);
      setUser(values);
    } else {
      alert("Invalid username & password combination");
    }
  };

  return (
    <main className="login__main">
      <div className="login__container">
        {userIsLoggedIn ? (
          <Redirect to={constants.LANDING_ROUTE} />
        ) : (
          <Form type="login" submitHandler={submitHandler} />
        )}
        <div>
          <Link to={constants.SIGN_UP_ROUTE}>Sign up</Link>
        </div>
      </div>
    </main>
  );
};

Login.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string,
    })
  ).isRequired,
};

export default Login;
