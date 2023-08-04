import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  it('Should display an "Welcome!" alert.', () => {
    login();
    expect(mockAlert).toHaveBeenCalledWith("Welcome!");
  });
});
