import { useContext, useState } from "react";
import { LoginCard } from "../components/LoginCard";
import { Center, Input } from "@chakra-ui/react";
import LoginButton from "../components/LoginButton";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string) => {
    const loggedIn = await login(email);

    if (!loggedIn) {
      return alert("Invalid email!");
    }

    setIsLoggedIn(true);
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
      <Input placeholder="Password" />
      <Center>
        <LoginButton onClick={() => validateUser(email)} />
      </Center>
    </LoginCard>
  );
};

export default Home;
