import React from "react";
import Router from "./RouterComponent";

import "./Layout.css";

function Layout() {
  return (
    <div className="container-fluid">
      <div className="row h-100">
        <div className="p-0">
          <Router />
        </div>
      </div>
    </div>
  );
}

export default Layout;
