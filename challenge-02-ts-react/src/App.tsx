import { ChakraProvider } from "@chakra-ui/react";
import { Login } from "./components/LoginCard";
import { Layout } from "./components/Layout";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Login />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
