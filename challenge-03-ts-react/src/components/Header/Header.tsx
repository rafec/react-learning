import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import "./Header.css";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../../services/storage";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    setIsLoggedIn(false);
    changeLocalStorage({ login: false });
    navigate("/");
  };

  return (
    <Flex bg="teal" w="100%" p={5} color="white">
      <Box>DioBank</Box>
      {isLoggedIn && (
        <>
          <Spacer />
          <Button bg="red" color="white" onClick={() => logout()}>
            Logout
          </Button>
        </>
      )}
    </Flex>
  );
};
