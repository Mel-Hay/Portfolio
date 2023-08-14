import React from "react";
import "../Projects.css";

import ThinkfulBnb from "../Screenshots/ThinkfulBnB.png";
import HtmlImage from "../Tech/HTML_cropped.png";
import Bootstrap from "../Tech/bootstrap_cropped.png";
import Css from "../Tech/Css_cropped.png";
import GitHubLogo from "../../../Images/logos/github-logo.png";

function ThinkfulBnbSection() {
  const gitHubClick = () => {
    const url = "https://github.com/Mel-Hay/ThinkfulBnbProject";
    window.open(url, "_blank");
  };

  const deployedClick = () => {
    const url = "https://thinkfulbnb-project.onrender.com/"; 
    window.open(url, "_blank");
  };

  return (
    <section id="ThinkfulBnbSection" className="d-flex row">
        <div className="col-12">
          <h3 className="Title">Title: <span className="ProjectTitle">ThinkfulBnb </span></h3>
        </div>


      <div className="row">
        

        <div className="d-flex col-12 col-md-6" id="ThinkfulBnbDiv">
          <img
            src={ThinkfulBnb}
            alt="ThinkfulBnb image"
            style={{ height: "90%" }}
            id="ThinkfulBnbImage"
          />
        </div >


        <div className="col-12 col-md-6">
        <div className="">
          <p>
            <span style={{ fontSize: "1.5em" }}>Description: </span>
            Thinkfulbnb is a vacation rental website that allows people to rent
            out their homes to people who are seeking short-term accommodations
            in that locale. Thinkfulbnb hosts rent out different kinds of
            properties, including single rooms, apartments, and unique living
            spaces such as yachts, houseboats, yurts, tiny houses, and even
            renovated medieval castles.
          </p>
        </div>
        <div id="SkillsList" className="d-flex flex-wrap align-items-center">
          <h3 className="h3Skills">Skills: </h3>

          <img
            className="skillsLogo"
            src={HtmlImage}
            alt="Html Logo"
            style={{ width: "15%" }}
            id="HtmlImage"
          />

          <img
            className="skillsLogo"
            src={Bootstrap}
            alt="Bootstrap logo"
            style={{ width: "20%" }}
            id="BootstrapImage"
          />

          <img
            className="skillsLogo"
            src={Css}
            alt="Css logo"
            style={{ width: "12%" }}
            id="CssImage"
          />
        </div>


        </div>
       
        

        <div className="d-flex row">
          <div className="d-flex col-6">
            <button onClick={deployedClick}>Deployed Website</button>
          </div>

          <div className="d-flex col-6">
            <button onClick={gitHubClick} id="GitHubButton">
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

export default ThinkfulBnbSection;
