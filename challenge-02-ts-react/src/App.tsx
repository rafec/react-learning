import { ChakraProvider } from "@chakra-ui/react";
import { Login } from "./components/Login";
import { login } from "./services/login";
import { Layout } from "./components/Layout";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Login eventLogin={login} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
