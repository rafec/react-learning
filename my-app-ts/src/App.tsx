import { Center, ChakraProvider, Input } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Center>
        <h1>Login</h1>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </Center>
    </ChakraProvider>
  );
}

export default App;
