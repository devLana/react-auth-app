export const getUser = (env = "prod") => {
  let user;

  if (env === "prod") {
    user = window.localStorage.getItem("user");
  } else {
    user = window.localStorage.getItem("test-user");
  }

  return user ? JSON.parse(user) : null;
};

export const setUser = (user, env = "prod") => {
  const saveUser = JSON.stringify(user);

  if (env === "prod") {
    window.localStorage.setItem("user", saveUser);
  } else {
    window.localStorage.setItem("test-user", saveUser);
  }
};

export const isLoggedIn = (env = "prod") => {
  const user = getUser(env);

  return !!user;
};

export const logOut = (cb, env = "prod") => {
  if (env === "prod") {
    window.localStorage.removeItem("user");
  } else {
    window.localStorage.removeItem("test-user");
  }

  cb();
};
