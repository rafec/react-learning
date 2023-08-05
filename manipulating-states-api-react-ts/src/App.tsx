import { ChakraProvider } from "@chakra-ui/react";
import { Login } from "./components/LoginCard";
import { Layout } from "./components/Layout";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [anotherValue, setAnotherValue] = useState(1);

  return (
    <ChakraProvider>
      {/* <Layout>
        <Login />
      </Layout> */}
      <div>
        <button onClick={() => setValue(value + 1)}>Add</button>
        <h1>{value}</h1>
        <button onClick={() => setAnotherValue(anotherValue + 1)}>Add</button>
        <h1>{anotherValue}</h1>
      </div>
    </ChakraProvider>
  );
}

export default App;
