import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <Router>
      < Home />
    </Router>
  );
}

export default App;