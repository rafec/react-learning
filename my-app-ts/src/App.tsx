import React from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      Hello world!
      <Card id={1} paragraph="Typescript" details="TS for back-end" />
      <Card id={2} paragraph="HTML" details="HTML for front-end" />
      <Card id={3} paragraph="SQL" details="SQL for database" />
    </Layout>
  );
}

export default App;
