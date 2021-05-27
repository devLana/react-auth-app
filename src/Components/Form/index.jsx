import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Image from "../Image";
import "./index.scss";
import constants from "../../utils/Constants";
import formErrors from "../../utils/formErrors";

const formFields = { username: "", password: "" };

const Form = ({ type, submitHandler }) => {
  const [values, setValues] = useState(formFields);
  const [errors, setErrors] = useState(formFields);
  const [visible, setVisible] = useState(false);

  const userNameInput = useRef();

  useEffect(() => {
    userNameInput.current.focus();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleFocus = e => {
    const { name, parentElement } = e.target;
    parentElement.classList.add("form__label--focus");
    setErrors({ ...errors, [name]: "" });
  };

  const handleBlur = e => {
    const { name, parentElement, value } = e.target;

    if (!value) {
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
            <label className="form__label" htmlFor="username">
              <span className="form__input--label">Username</span>
              <input
                ref={userNameInput}
                id="username"
                type="text"
                name="username"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
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
                onFocus={handleFocus}
                onBlur={handleBlur}
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
