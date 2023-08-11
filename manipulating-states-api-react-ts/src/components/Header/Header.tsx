import { Box } from "@chakra-ui/react";
import "./Header.css";
import { useContext } from "react";
import { AppContext } from "../../App";

export const Header = () => {
  const context = useContext(AppContext);

  return (
    <Box bg="teal" w="100%" p={4} color="white">
      DioBank
    </Box>
  );
};
