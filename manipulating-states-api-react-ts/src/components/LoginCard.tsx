import { Box, Center, Input } from "@chakra-ui/react";
import { LoginButton } from "./LoginButton";
import { login } from "../services/login";
import { useState, useEffect } from "react";
import { api } from "../api";

interface UserData {
  email: string;
  password: string;
  name: string;
}

export const LoginCard = () => {
  const [email, setEmail] = useState<string>("");
  const [userData, setUserData] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  return (
    <Box minHeight="100vh" backgroundColor="#7f28b5" padding="25px">
      <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
        {userData === null || userData === undefined ? (
          <h1>Loading...</h1>
        ) : (
          <h1>Data loaded!</h1>
        )}
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
