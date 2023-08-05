import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  const mockEmail = "rafael@mail.com";
  window.alert = mockAlert;

  it("Should display an 'Welcome!' alert.", () => {
    login(mockEmail);
    expect(mockAlert).toHaveBeenCalledWith(`Welcome, ${mockEmail}!`);
  });

  it("Should not display 'Welcome!' alert without an email.", () => {
    login(mockEmail);
    expect(mockAlert).not.toHaveBeenCalledWith("Welcome, !");
  });
});
