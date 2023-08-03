import React from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <h1>Login</h1>
      <label htmlFor="emailInput">Email:</label>
      <input type="email" id="emailInput" />
      <label htmlFor="passwordInput">Password:</label>
      <input type="password" id="passwordInput" />
      <button>Login</button>
    </Layout>
  );
}

export default App;
