// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./styles/index.css";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
