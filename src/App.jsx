import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home"; // Fixed import path
import Dashboard from "./pages/Dashboard"; // Fixed import path
import './app.css'

function App() {
  const [userData, setUserData] = useState({ diet: "", workout: "", roadmap: "" });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setUserData={setUserData} />} />
        <Route path="/dashboard" element={<Dashboard userData={userData} />} />
      </Routes>
    </Router>
  );
}

export default App;
