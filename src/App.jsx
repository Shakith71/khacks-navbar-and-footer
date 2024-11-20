import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Foot from "./Foot";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={`appStyle ${isMenuOpen ? "hidden" : ""}`}><Foot isMenuOpen={isMenuOpen} /></div>
    </div>
  );
}

export default App;
