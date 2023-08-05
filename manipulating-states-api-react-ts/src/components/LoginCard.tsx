import { Box, Center, Input } from "@chakra-ui/react";
import { LoginButton } from "./LoginButton";
import { login } from "../services/login";
import { useState, useEffect } from "react";
import { api } from "../api";

export const LoginCard = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await api;
      console.log(data);
    };

    getData();
  });

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
          <LoginButton onClick={() => login(email)} />
        </Center>
      </Box>
    </Box>
  );
};
