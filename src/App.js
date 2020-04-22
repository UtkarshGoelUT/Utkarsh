import React from "react";
import Navbar from "./Components/Navbar";
import Education from "./Components/Education";
import Skill from "./Components/Skills";
import "./index.css";

function App() {
  return (
    <div>
      <div className="home">
        <header className="header">
          <Navbar></Navbar>
        </header>
        <div className="home-body">
          <div className="hey">Hey, I'm</div>
          <div className="ut">---UTKARSH---</div>
        </div>
      </div>
      <div className="edu">
        <Education id="edu"></Education>
      </div>
      <div className="skill">
        <Skill></Skill>
      </div>
      <div className="achiv"></div>
    </div>
  );
}

export default App;
