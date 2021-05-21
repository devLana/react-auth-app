import { useState } from "react";
import PropTypes from "prop-types";
import Image from "./Image";

const formFields = { username: "", password: "" };

const Form = ({ type, submitHandler }) => {
  const [values, setValues] = useState(formFields);
  const [errors, setErrors] = useState(formFields);
  const [visible, setVisible] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleFocus = e => {
    // const { name, parentElement } = e.target;
    // parentElement.classList.remove("form-error");
    // setErrors({ ...errors, [name]: "" });
  };

  const handleBlur = e => {
    // const { name, parentElement } = e.target;
    // if (errors[name]) {
    //   parentElement.classList.add("form-error");
    // }
  };

  const handleVisibility = e => {
    setVisible(e.target.checked);
  };

  const handleSubmit = e => {
    e.preventDefault();
    submitHandler(values, setErrors);
  };

  return (
    <div>
      <Image />
      <form noValidate onSubmit={handleSubmit}>
        <div className="form__group">
          <div className="form__input">
            <label
              className="form__label"
              htmlFor="username"
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <span className="form__input--label">Username</span>
              <input
                id="username"
                type="text"
                name="username"
                onChange={handleChange}
                value={values.username}
              />
            </label>
          </div>
          {errors.username && (
            <span className="form__input--error">{errors.username}</span>
          )}
        </div>
        <div className="form__group">
          <div className="form__input">
            <label className="form__label" htmlFor="password">
              <span className="form__input--label">Password</span>
              <input
                id="password"
                type={visible ? "text" : "password"}
                name="password"
                onChange={handleChange}
                value={values.password}
              />
            </label>
          </div>
          {errors.password && (
            <span className="form__input--error">{errors.password}</span>
          )}
        </div>
        <div className="form__group">
          <div className="form__input">
            <label htmlFor="checkbox" className="form__input">
              <span className="form__input--label">
                {visible ? "Hide" : "Show"} Password
              </span>
              <input
                id="checkbox"
                type="checkbox"
                checked={visible}
                onChange={handleVisibility}
              />
            </label>
          </div>
        </div>
        <div className="form__group">
          <div className="form__input">
            <input
              id="submit__btn"
              type="submit"
              value={type === "login" ? "Log in" : "Sign up"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  type: PropTypes.string,
  submitHandler: PropTypes.func.isRequired,
};

Form.defaultProps = {
  type: "sign up",
};

export default Form;
