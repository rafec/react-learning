import { login } from "./login";

const mockSetIsLoggedIn = jest.fn();
const mockNavigate = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    setIsLoggedIn: mockSetIsLoggedIn,
  }),
}));

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockNavigate,
}));

describe("login", () => {
  const mockEmail = "rafael@mail.com";

  it("Should display an 'Welcome!' alert if the email is valid.", async () => {
    await login(mockEmail);
    expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
    expect(mockNavigate).toHaveBeenCalledWith("/1");
  });

  it("Should display an error if the email is invalid.", async () => {
    await login("invalid@mail.com");
    expect(mockSetIsLoggedIn).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
