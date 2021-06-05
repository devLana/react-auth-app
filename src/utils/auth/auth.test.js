import * as auth from ".";

describe("getUser Function", () => {
  afterAll(() => {
    localStorage.removeItem("test-user");
  });

  test("gets user from localStorage", () => {
    const env = "test";
    const testUser = { username: "jack", password: "1234abc" };
    let user = auth.getUser(env);

    expect(user).toBeFalsy();
    expect(user).toBeNull();

    localStorage.setItem("test-user", JSON.stringify(testUser));
    user = auth.getUser(env);

    expect(user).toEqual(testUser);
    expect(user).toHaveProperty("username");
    expect(user).toHaveProperty("password");
  });
});
