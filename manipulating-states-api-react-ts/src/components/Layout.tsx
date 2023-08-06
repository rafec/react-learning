import { Header } from "./Header/Header";
import { Footer } from "./Footer";
import { Box } from "@chakra-ui/react";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Box minHeight="100vh" backgroundColor="#7f28b5">
        <Header />
        {children}
        <Footer />
      </Box>
    </>
  );
};
