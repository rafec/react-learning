import { useState } from "react";
import { LoginCard } from "../components/LoginCard";
import { Center, Input } from "@chakra-ui/react";
import LoginButton from "../components/LoginButton";
import { login } from "../services/login";

const Home = () => {
  const [email, setEmail] = useState<string>("");

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
        <LoginButton onClick={() => login(email)} />
      </Center>
    </LoginCard>
  );
};

export default Home;
