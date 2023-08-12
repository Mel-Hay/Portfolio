import React from "react";
import "../HomeStyle.css"
function NavBar(){

    return(
      <div id="navbar" className="d-flex justify-content-center align-items-center">

      <ul className="list-unstyled list-inline navbarUl">
          <li className="list-inline-item mx-2"><a href="#Info" className="style-none">Home</a></li>
          <li className="list-inline-item mx-2"><a href="#About" className="style-none">About</a></li>
          <li className="list-inline-item mx-2"><a href="#Card" className="style-none">Contact</a></li>
          <li className="list-inline-item mx-2"><a href="#Projects" className="style-none">Projects</a></li>
          <li className="list-inline-item mx-2"><a href="#Skills" className="style-none">Skills</a></li>
          <li className="list-inline-item mx-2"><a href="#Resume" className="style-none">Resume</a></li>
      </ul>
  </div>
    )
}

export default NavBar