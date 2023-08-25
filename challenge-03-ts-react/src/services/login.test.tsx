import { login } from "./login";

describe("login", () => {
  const mockEmail = "rafael@mail.com";
  const mockPassword = "123456";

  it("Should login if the email and the password are valid.", async () => {
    const response = await login(mockEmail, mockPassword);
    expect(response).toBeTruthy();
  });

  it("Should display an error alert if the email or the password are invalid.", async () => {
    const response = await login("invalid@mail.com", "invalidPassword");
    expect(response).toBeFalsy();
  });
});
