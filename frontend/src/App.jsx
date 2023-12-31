import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Generator from "./pages/generator/Generator";
import Landing from "./pages/landing/Landing";
import Output from "./pages/generator/components/Output"
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/Output" element={<Output />} />
      </Routes>
    </Router>
  );
}

export default App;
