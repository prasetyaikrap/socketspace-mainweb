import React from "react";
import "../css/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Home from "./ss-home/Home";
import DocsPage from "./ss-home/Docs";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/docs" element={<DocsPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
