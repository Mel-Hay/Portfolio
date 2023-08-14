import React from "react";
import "../Projects.css";

import GrubDash from "../Screenshots/GrubDashSS.png";
import Knex from "../Tech/Knex_cropped.png";
import RestApis_cropped from "../Tech/Knex_cropped.png";
import Node from "../Tech/Knex_cropped.png";
import Express from "../Tech/Knex_cropped.png";
import GitHubLogo from "../../../Images/logos/github-logo.png";
import PostgreSQL from "../Tech/PostgreSQL_cropped.png";
import JavaScript from "../Tech/JavaScript_cropped.png";

function GrubDashSection() {
  const gitHubClick = () => {
    const url = "https://github.com/Mel-Hay/GrubDash"; // Replace with your link
    window.open(url, "_blank");
  };

  const deployedClick = () => {
    const url = "https://front-end-grubdash.onrender.com"; // Replace with your link
    window.open(url, "_blank");
  };

  return (
    <section id="GrubDashSection" className="d-flex row">
        <div className="col-12">
          <h3 className="Title">Title: <span className="ProjectTitle">GrubDash </span></h3>
        </div>

      
      <div className="row">
        

        <div className="d-flex col-12 col-md-6" id="GrubDashDiv">
          <img
            src={GrubDash}
            alt="Grubdash image"
            style={{ height: "90%" }}
            id="GrubDashImage"
          />
        </div>

        <div className="col-12 col-md-6">
          <div>
            <p>
              <span style={{ fontSize: "1.5em" }}>Description: </span>
              I've been hired as a backend developer for a new startup called
              GrubDash! As another developer works on the design and frontend
              experience, I have been tasked with setting up an API and building
              out specific routes so that the frontend developers can demo some
              initial design ideas for the big bosses.
            </p>
          </div>

          <div id="SkillsList" className="d-flex flex-wrap align-items-center">
          <h3 className="h3Skills">Skills: </h3>

          <img
            className="skillsLogo"
            src={Knex}
            alt="Knex Logo"
            style={{ width: "18%" }}
            id="KnexImage"
          />

          <img
            className="skillsLogo"
            src={RestApis_cropped}
            alt="Html Logo"
            style={{ width: "19%" }}
            id="RestApiImage"
          />

          <img
            className="skillsLogo"
            src={Node}
            alt="Node logo"
            style={{ width: "18%" }}
            id="NodeImage"
          />

          <img
            className="skillsLogo"
            src={Express}
            alt="Express logo"
            style={{ width: "18%" }}
            id="ExpressImage"
          />
          <img
            className="skillsLogo"
            src={PostgreSQL}
            alt="Express logo"
            style={{ width: "20%" }}
            id="PostgreSQLImage"
          />
          <img
            className="skillsLogo"
            src={JavaScript}
            alt="Express logo"
            style={{ width: "20%" }}
            id="JavaScriptImage"
          />
        </div>
        </div>

        

       

        <div className="d-flex row">
          <div className="d-flex col-6">
            <button onClick={deployedClick} >
              Deployed Website
            </button>
          </div>

          <div className="d-flex col-6">
            <button
              onClick={gitHubClick}
              id="GitHubButton">
                
              <span>
                <img
                  src={GitHubLogo}
                  alt="GitHub logo"
                  id="gitHubImage"
                />
              </span>
              GitHub Repo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrubDashSection;
