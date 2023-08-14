import React from "react";
import "./Home.css"

import Info from "./Components/Info/Info"
import NavBar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects"
import Skills from "./Components/Skills/Skills";
import Resume from "./Components/Resume/Resume";
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";

function Home() {
  return (
    <div > 
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
          <Footer />
        </main>
    </div>
  );
}

export default Home;
