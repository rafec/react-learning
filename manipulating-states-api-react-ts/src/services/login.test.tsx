import { login } from "./login";

describe("login", () => {
  const mockEmail = "rafael@mail.com";

  it("Should display an 'Welcome!' alert if the email is valid.", async () => {
    const response = await login(mockEmail);
    expect(response).toBeTruthy();
  });

  it("Should display an error if the email is invalid.", async () => {
    const response = await login("invalid@mail.com");
    expect(response).toBeFalsy();
  });
});
