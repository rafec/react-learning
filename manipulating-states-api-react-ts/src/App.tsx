import { ChakraProvider } from "@chakra-ui/react";
import { LoginCard } from "./components/LoginCard";
import { Layout } from "./components/Layout";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <LoginCard />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
