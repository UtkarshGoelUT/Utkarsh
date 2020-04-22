import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="main">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <div className="header">
        <div className="hey">Hey, I'm</div>
        <div className="ut">---- UTKARSH ----</div>
      </div>
    </div>
  );
}

export default App;
