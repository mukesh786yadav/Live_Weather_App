import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/mukesh786yadav/Live_Weather_App">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://github.com/mukesh786yadav">
          Mukesh Yadav
        </a>{" "}
       
      </div>
    </React.Fragment>
  );
}

export default App;
