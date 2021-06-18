import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import Form from "../Form";
import { isLoggedIn, setUser } from "../../utils/auth";
import constants from "../../utils/Constants";
import useDocTitle from "../../hooks/useDocTitle";
import { formErrors } from "../../utils/form";
import "./index.scss";

const SignUp = ({ users, handleUsers }) => {
  const history = useHistory();

  useDocTitle("Sign up");

  const userIsLoggedIn = isLoggedIn();

  const submitHandler = (values, setErrors) => {
    const errors = {};

    if (!values.username.trim()) {
      errors.username = formErrors.username;
    }

    if (!values.password) {
      errors.password = formErrors.password;
    }

    setErrors(errors);

    if (errors.username || errors.password) {
      return;
    }

    const userExists = users.some(({ username }) => {
      return username.toLowerCase() === values.username.toLowerCase();
    });

    if (userExists) {
      alert("That username has been taken. Try another one");
    } else {
      history.push(constants.LANDING_ROUTE);
      setUser(values);
      handleUsers(values);
    }
  };

  if (userIsLoggedIn) {
    return <Redirect to={constants.LANDING_ROUTE} />;
  }

  return (
    <main className="sign-up__main">
      <div className="sign-up__container">
        <Form submitHandler={submitHandler} />
        <div className="sign-up__link">
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
