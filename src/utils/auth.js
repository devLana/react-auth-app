export const getUser = () => {
  const user = localStorage.getItem("user");

  return user ? JSON.parse(user) : null;
};

export const setUser = user => {
  const saveUser = JSON.stringify(user);

  localStorage.setItem("user", saveUser);
};

export const isLoggedIn = () => {
  const user = getUser();

  return !!user;
};

export const logOut = cb => {
  localStorage.removeItem("user");

  cb();
};
