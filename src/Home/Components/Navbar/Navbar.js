import React from "react";
import "./Navbar.css"

function NavBar(){

    return(
      <section id="navbar" className="d-inline-flex justify-content-center align-items-center">

        <ul className="list-unstyled list-inline navbarUl">
            <li className="list-inline-item mx-1"><a href="#Info" className="style-none">Home</a></li>
            <li className="list-inline-item mx-1"><a href="#About" className="style-none">About</a></li>
            <li className="list-inline-item mx-1"><a href="#Contact" className="style-none">Contact</a></li>
            <li className="list-inline-item mx-1"><a href="#Projects" className="style-none">Projects</a></li>
            <li className="list-inline-item mx-1"><a href="#Resume" className="style-none">Resume</a></li>
        </ul>
     </section>
    )
}

export default NavBar