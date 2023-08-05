import { Box, Button, Center, Input } from "@chakra-ui/react";

interface ILogin {
  eventLogin: () => {};
}

export const Login = ({ eventLogin }: ILogin) => {
  return (
    <Box minHeight="100vh" backgroundColor="#7f28b5" padding="25px">
      <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
        <Center>
          <h1>Login</h1>
        </Center>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Center>
          <Button
            onClick={eventLogin}
            colorScheme="teal"
            size="sm"
            width="100%"
            marginTop="5px"
          >
            LOGIN
          </Button>
        </Center>
      </Box>
    </Box>
  );
};
