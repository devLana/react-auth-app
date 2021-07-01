import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Form from "../Form";
import { isLoggedIn, setUser } from "../../utils/auth";
import constants from "../../utils/Constants";
import useDocTitle from "../../hooks/useDocTitle";
import { formErrors } from "../../utils/form";
import post from "../../service/post";
import "./index.scss";

const SignUp = () => {
  const history = useHistory();

  useDocTitle("Sign up");

  const userIsLoggedIn = isLoggedIn();

  const submitHandler = async (values, setErrors) => {
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

    const data = {
      username: values.username,
      password: values.password,
    };

    try {
      const response = await post(constants.API_SIGNUP, data);

      setUser(response.user);
      history.push(constants.LANDING_ROUTE);
    } catch (err) {
      alert(err.response.data.message);
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

export default SignUp;
