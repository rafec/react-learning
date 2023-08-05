import { Box, Center, Input } from "@chakra-ui/react";
import { LoginButton } from "./LoginButton";
import { login } from "../services/login";

export const Login = () => {
  return (
    <Box minHeight="100vh" backgroundColor="#7f28b5" padding="25px">
      <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
        <Center>
          <h1>Login</h1>
        </Center>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Center>
          <LoginButton eventLogin={login} />
        </Center>
      </Box>
    </Box>
  );
};
