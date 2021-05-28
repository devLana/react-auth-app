export const formErrors = {
  username: "Enter Username",
  password: "Enter Password",
};

export const formFields = { username: "", password: "" };

export const validateUsername = (e, func) => {
  const { name, value } = e.target;
  let error;

  if (!value.trim()) {
    error = formErrors[name];
  }

  func(e, error);
};

export const validatePassword = (e, func) => {
  const { name, value } = e.target;
  let error;

  if (!value) {
    error = formErrors[name];
  }

  func(e, error);
};
