import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Space from "./components/Space";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/space" element={<Space />} />
      </Routes>
    </Router>
  );
}

export default App;
