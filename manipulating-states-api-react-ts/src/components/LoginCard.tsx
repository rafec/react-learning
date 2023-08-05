import { Box, Center, Input } from "@chakra-ui/react";
import { LoginButton } from "./LoginButton";
import { login } from "../services/login";
import { useState } from "react";

export const LoginCard = () => {
  const [email, setEmail] = useState("");

  return (
    <Box minHeight="100vh" backgroundColor="#7f28b5" padding="25px">
      <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
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
          <LoginButton onClick={login} />
        </Center>
      </Box>
    </Box>
  );
};
