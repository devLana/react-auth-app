import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Image from "../Image";
import constants from "../../utils/Constants";
import {
  formErrors,
  formFields,
  validatePassword,
  validateUsername,
} from "../../utils/form";
import "./index.scss";

const Form = ({ type, submitHandler }) => {
  const [values, setValues] = useState(formFields);
  const [errors, setErrors] = useState(formFields);
  const [visible, setVisible] = useState(false);

  const usernameLabel = useRef();
  const passwordLabel = useRef();

  useEffect(() => {
    if (errors.username) {
      usernameLabel.current.classList.add("form__label--error");
    }

    if (errors.password) {
      passwordLabel.current.classList.add("form__label--error");
    }
  }, [errors.username, errors.password]);

  const handleChange = e => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleFocus = e => {
    const { name, parentElement } = e.target;

    parentElement.classList.remove("form__label--error");
    parentElement.classList.add("form__label--focus");

    setErrors({ ...errors, [name]: "" });
  };

  const handleBlur = (e, error) => {
    const { name, parentElement } = e.target;

    if (error) {
      parentElement.classList.remove("form__label--focus");
      setErrors({ ...errors, [name]: formErrors[name] });
    }
  };

  const handleVisibility = e => {
    setVisible(e.target.checked);
  };

  const handleSubmit = e => {
    e.preventDefault();
    submitHandler(values, setErrors);
  };

  return (
    <>
      <div className="page__logo">
        <Link to={constants.LANDING_ROUTE} className="form__link">
          <Image />
        </Link>
      </div>
      <form noValidate onSubmit={handleSubmit}>
        <div className="form__group">
          <div className="form__input">
            <label
              className="form__label"
              htmlFor="username"
              ref={usernameLabel}
            >
              <span>Username</span>
              <input
                id="username"
                type="text"
                name="username"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={e => validateUsername(e, handleBlur)}
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
            <label
              className="form__label"
              htmlFor="password"
              ref={passwordLabel}
            >
              <span>Password</span>
              <input
                id="password"
                type={visible ? "text" : "password"}
                name="password"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={e => validatePassword(e, handleBlur)}
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
            <label htmlFor="checkbox" className="form__checkbox">
              <input
                id="checkbox"
                type="checkbox"
                checked={visible}
                onChange={handleVisibility}
              />
              <span>{visible ? "Hide" : "Show"} Password</span>
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
    </>
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
