import React from "react";

import { Route, Routes } from "react-router-dom";

import NotFound from "./NotFound";
import Home from "../Main_Components/Home";


function RouterComponent() {
  return (
    <Routes>
  {/* Routes to the dashboard */}
      <Route exact={true} path="/" element={< Home />} />
      <Route path="/home" element={<Home />} />
      <Route element={<NotFound />} />
    </Routes>
  );
}

export default RouterComponent;
