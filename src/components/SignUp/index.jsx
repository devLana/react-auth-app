import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Form from "../Form";
import { isLoggedIn, setUser } from "../../utils/auth";
import constants from "../../utils/Constants";
import useDocTitle from "../../hooks/useDocTitle";
import { formErrors } from "../../utils/form";
import post from "../../service/post";
import "./index.scss";

const SignUp = () => {
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

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
    } finally {
      setLoading(false);
    }
  };

  if (userIsLoggedIn) {
    return <Redirect to={constants.LANDING_ROUTE} />;
  }

  return (
    <>
      {loading ? (
        <div className="loader__text">Loading...</div>
      ) : (
        <main className="sign-up__main">
          <div className="sign-up__container">
            <Form submitHandler={submitHandler} />
            <div className="sign-up__link">
              <span>Already have an account? </span>
              <Link to={constants.LOGIN_ROUTE}>Log in</Link>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default SignUp;
