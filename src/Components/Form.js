import { useState } from "react";
import PropTypes from "prop-types";

const formFields = { userName: "", password: "" };

const Form = ({ type }) => {
  const [values, setValues] = useState(formFields);
  const [errors, setErrors] = useState(formFields);

  const submitHandler = {};

  return (
    <form noValidate onSubmit={submitHandler}>
      <div className="form__group">
        <div className="form__input">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            name="userName"
            value={values.userName}
          />
        </div>
        {errors.userName && (
          <div className="form__error">{errors.userName}</div>
        )}
      </div>
      <div className="form__group">
        <div className="form__input">
          <label htmlFor="password">Username</label>
          <input
            id="password"
            type="password"
            name="password"
            value={values.password}
          />
        </div>
        {errors.password && (
          <div className="form__error">{errors.password}</div>
        )}
      </div>
      <div className="form__group">
        <div className="form__input">
          <input
            type="submit"
            value={type === "login" ? "Log in" : "Sign up"}
          />
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Form;
