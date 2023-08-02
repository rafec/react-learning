import React from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        Hello world!
        <Card id={1} paragraph="Typescript" details="TS for back-end" />
        <Card id={2} paragraph="HTML" details="HTML for front-end" />
        <Card id={3} paragraph="SQL" details="SQL for database" />
      </div>
      <div>Another div</div>
      <Footer />
    </>
  );
}

export default App;
