import styled from "styled-components";
import { Layout } from "./components/Layout";

const Box = styled.div`
  background-color: orange;
`;

function App() {
  return (
    <Layout>
      <Box>
        <h1>Login</h1>
      </Box>
      <label htmlFor="emailInput">Email:</label>
      <input type="email" id="emailInput" />
      <label htmlFor="passwordInput">Password:</label>
      <input type="password" id="passwordInput" />
      <button>Login</button>
    </Layout>
  );
}

export default App;
