import { Box } from "@chakra-ui/react";

export const LoginCard = ({ children }: any) => {
  return (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius="25px"
      padding="15px"
      margin="25px"
    >
      {children}
    </Box>
  );
};
