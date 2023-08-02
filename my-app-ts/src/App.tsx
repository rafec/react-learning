import React from "react";
import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <div className="App">
        Hello world!
        <Card />
        <Card />
        <Card />
      </div>
      <div>Another div</div>
    </>
  );
}

export default App;
