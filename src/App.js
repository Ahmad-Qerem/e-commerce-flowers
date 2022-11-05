import React from "react";
import "./App.css";
import * as all from "./components/AllComponents";

function App() {
  return (
    <>
      <div className="Container">
        <all.LogoAndIcons />
        <all.NavBar />
        <all.HomePage />
      </div>
      <all.Footer />
    </>
  );
}

export default App;
