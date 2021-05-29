import { Link, Redirect, useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import Form from "../Form";
import { isLoggedIn, setUser } from "../../utils/auth";
import constants from "../../utils/Constants";
import useDocTitle from "../../hooks/useDocTitle";
import { formErrors } from "../../utils/form";
import "./index.scss";

const Login = ({ users }) => {
  const history = useHistory();

  useDocTitle("Log in");

  const userIsLoggedIn = isLoggedIn();

  const submitHandler = (values, setErrors) => {
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

    const userExists = users.find(({ username, password }) => {
      return (
        username.toLowerCase() === values.username.toLowerCase() &&
        password === values.password
      );
    });

    if (userExists) {
      history.push(constants.LANDING_ROUTE);
      setUser(values);
    } else {
      alert("Invalid username & password combination");
    }
  };

  if (userIsLoggedIn) {
    return <Redirect to={constants.LANDING_ROUTE} />;
  }

  return (
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
