import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return <div className="App"></div>;
}

export default App;
