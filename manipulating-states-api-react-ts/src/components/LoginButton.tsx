import { Button } from "@chakra-ui/react";

interface IButton {
  eventLogin: () => {};
}

export const LoginButton = ({ eventLogin }: IButton) => {
  return (
    <Button
      onClick={eventLogin}
      colorScheme="teal"
      size="sm"
      width="100%"
      marginTop="5px"
    >
      LOGIN
    </Button>
  );
};
