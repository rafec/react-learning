import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import AccountInfo from "./pages/AccountInfo";
import { createContext } from "react";

interface IAppContext {
  user: string;
}

export const AppContext = createContext({} as IAppContext);

const AppContextProvider = ({ children }: any) => {
  const user = "Rafael";

  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
};

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/account/:id" element={<Account />} />
              <Route path="/accountinfo" element={<AccountInfo />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
