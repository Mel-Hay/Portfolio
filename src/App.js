import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router>
      < Layout />
    </Router>
  );
}

export default App;