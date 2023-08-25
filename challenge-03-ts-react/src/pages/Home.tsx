import { useContext, useState } from "react";
import { LoginCard } from "../components/LoginCard";
import { Center, Input } from "@chakra-ui/react";
import LoginButton from "../components/LoginButton";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);

    if (!loggedIn) {
      return alert("Invalid credentials!");
    }

    setIsLoggedIn(true);
    changeLocalStorage({ login: true });
    navigate("/account/1");
  };

  return (
    <LoginCard>
      <Center>
        <h1>Login</h1>
      </Center>
      <Input
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Center>
        <LoginButton onClick={() => validateUser(email, password)} />
      </Center>
    </LoginCard>
  );
};

export default Home;
