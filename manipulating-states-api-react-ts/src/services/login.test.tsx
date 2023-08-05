import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  const mockEmail = "rafael@mail.com";
  window.alert = mockAlert;

  it("Should display an 'Welcome!' alert if the email is valid.", async () => {
    await login(mockEmail);
    expect(mockAlert).toHaveBeenCalledWith(`Welcome, ${mockEmail}!`);
  });

  it("Should not display 'Welcome!' alert without an email.", async () => {
    await login(mockEmail);
    expect(mockAlert).not.toHaveBeenCalledWith("Welcome, !");
  });

  it("Should display an error if the email is invalid.", async () => {
    await login("invalid@mail.com");
    expect(mockAlert).toHaveBeenCalledWith("Invalid email!");
  });
});
