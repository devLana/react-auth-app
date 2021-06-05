import * as auth from ".";

afterEach(() => {
  localStorage.removeItem("test-user");
});

describe("get user from localStorage", () => {
  const env = "test";
  const testUser = { username: "jack", password: "1234abc" };

  test("no user in localStorage", () => {
    const user = auth.getUser(env);

    expect(user).toBeFalsy();
    expect(user).toBeNull();
  });

  test("found user in localStorage", () => {
    localStorage.setItem("test-user", JSON.stringify(testUser));

    const user = auth.getUser(env);

    expect(user).toEqual(testUser);
    expect(user).toHaveProperty("username");
    expect(user).toHaveProperty("password");
  });
});

describe("save user to localStorage", () => {
  test("saved user to localStorage", () => {
    const env = "test";
    const testUser = { username: "jack", password: "1234abc" };

    auth.setUser(testUser, env);

    const user = JSON.parse(localStorage.getItem("test-user"));

    expect(user).toEqual(testUser);
    expect(user).toHaveProperty("username");
    expect(user).toHaveProperty("password");
  });
});

describe("check if user is already logged in", () => {
  const env = "test";

  test("user is not logged in", () => {
    const userIsLoggedIn = auth.isLoggedIn(env);

    expect(userIsLoggedIn).toBeFalsy();
    expect(userIsLoggedIn).toEqual(false);
  });

  test("user is logged in", () => {
    const testUser = { username: "jack", password: "1234abc" };

    localStorage.setItem("test-user", JSON.stringify(testUser));

    const userIsLoggedIn = auth.isLoggedIn(env);

    expect(userIsLoggedIn).toBeTruthy();
    expect(userIsLoggedIn).toEqual(true);
  });
});

describe("log user out of application", () => {
  const env = "test";
  const testUser = { username: "jack", password: "1234abc" };
  const callback = jest.fn();

  test("user is logged out", () => {
    localStorage.setItem("test-user", JSON.stringify(testUser));
    auth.logOut(callback, env);

    const user = localStorage.getItem("test-user");

    expect(user).toBeFalsy();
    expect(user).toBeNull();
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
