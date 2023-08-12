import React from "react";
import "./HomeStyle.css"

import Info from "./Components/Info"
import NavBar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects"
import Skills from "./Components/Skills/Skills";
import Resume from "./Components/Resume";
import Card from "./Components/Card/Card";
function Home() {
  return (
    <div> 
        <header>
         <NavBar />
        </header>
        <main>
          <Info />
          <Skills />
          <About/>
          <Card />
          <Projects />
          <Resume />
          
        </main>
    </div>
  );
}

export default Home;
