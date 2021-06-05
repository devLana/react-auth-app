import * as auth from ".";

describe("get user from localStorage", () => {
  afterAll(() => {
    localStorage.removeItem("test-user");
  });

  const testUser = { username: "jack", password: "1234abc" };
  const env = "test";

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

describe("setUser Function", () => {
  afterAll(() => {
    localStorage.removeItem("test-user");
  });

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

describe("isLoggedIn Function", () => {
  afterAll(() => {
    localStorage.removeItem("test-user");
  });

  test("user is not logged in", () => {
    const env = "test";

    const userIsLoggedIn = auth.isLoggedIn(env);

    expect(userIsLoggedIn).toBeFalsy();
    expect(userIsLoggedIn).toEqual(false);
  });

  test("user is logged in", () => {
    const env = "test";
    const testUser = { username: "jack", password: "1234abc" };

    localStorage.setItem("test-user", JSON.stringify(testUser));

    const userIsLoggedIn = auth.isLoggedIn(env);

    expect(userIsLoggedIn).toBeTruthy();
    expect(userIsLoggedIn).toEqual(true);
  });
});
