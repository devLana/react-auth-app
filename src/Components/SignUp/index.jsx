import { Link, Redirect, useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import Form from "../Form";
import { isLoggedIn, setUser } from "../../utils/auth";
import constants from "../../utils/Constants";
import useDocTitle from "../../hooks/useDocTitle";
import "./index.scss";

const SignUp = ({ users, handleUsers }) => {
  const history = useHistory();

  useDocTitle("Sign up");

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

    const userExists = users.some(
      ({ username }) => username === values.username.trim()
    );

    if (userExists) {
      alert("That username has been taken. Try another one");
    } else {
      history.push(constants.LANDING_ROUTE);
      setUser(values);
      handleUsers(values);
    }
  };

  return (
    <main className="sign-up__main">
      <div className="sign-up__container">
        {userIsLoggedIn ? (
          <Redirect to={constants.LANDING_ROUTE} />
        ) : (
          <Form submitHandler={submitHandler} />
        )}
        <div>
          <span>Already have an account? </span>
          <Link to={constants.LOGIN_ROUTE}>Log in</Link>
        </div>
      </div>
    </main>
  );
};

SignUp.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string,
    })
  ).isRequired,
  handleUsers: PropTypes.func.isRequired,
};

export default SignUp;
