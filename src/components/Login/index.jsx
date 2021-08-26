import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Form from "../Form";
import { isLoggedIn, setUser } from "../../utils/auth";
import constants from "../../utils/Constants";
import useDocTitle from "../../hooks/useDocTitle";
import { formErrors } from "../../utils/form";
import post from "../../service/post";
import "./index.scss";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useDocTitle("Log in");

  const userIsLoggedIn = isLoggedIn();

  const submitHandler = async (values, setErrors) => {
    const errors = {};

    if (!values.username) {
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
      const login = await post(constants.API_SIGNIN, data);

      setUser(login.user);
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
        <main className="login__main">
          <div className="login__container">
            <Form type="login" submitHandler={submitHandler} />
            <div className="login__link">
              <Link to={constants.SIGN_UP_ROUTE}>Create Account</Link>
            </div>
          </div>
          <div className="login__credentials">
            <span>
              &#123; username -&gt; &quot;jack&quot;, password -&gt;
              &quot;1234abc&quot; &#125;
            </span>
          </div>
        </main>
      )}
    </>
  );
};

export default Login;
