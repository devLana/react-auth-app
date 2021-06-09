export const getUser = (env = "prod") => {
  let user;

  if (env === "prod") {
    user = localStorage.getItem("user");
  } else {
    user = localStorage.getItem("test-user");
  }

  return user ? JSON.parse(user) : null;
};

export const setUser = (user, env = "prod") => {
  const saveUser = JSON.stringify(user);

  if (env === "prod") {
    localStorage.setItem("user", saveUser);
  } else {
    localStorage.setItem("test-user", saveUser);
  }
};

export const isLoggedIn = (env = "prod") => {
  const user = getUser(env);

  return !!user;
};

export const logOut = (cb, env = "prod") => {
  if (env === "prod") {
    localStorage.removeItem("user");
  } else {
    localStorage.removeItem("test-user");
  }

  cb();
};
