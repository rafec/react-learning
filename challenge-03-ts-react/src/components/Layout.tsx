import { Header } from "./Header/Header";
import { Footer } from "./Footer";
import { Box } from "@chakra-ui/react";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Box
        minHeight="100vh"
        background="linear-gradient(0deg, rgba(70,35,92,1) 0%, rgba(119,24,179,1) 14%, rgba(140,32,207,1) 43%, rgba(140,32,207,1) 43%, rgba(155,34,229,1) 61%, rgba(161,53,229,1) 81%)"
      >
        <Header />
        {children}
        <Footer />
      </Box>
    </>
  );
};
