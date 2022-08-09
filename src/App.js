// import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./components/GlobalStyle";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeRouter from "./config/route/HomeRoute";

function App() {
  return (
    <Router>
      <HomeRouter />
    </Router>
  );
}

export default App;
