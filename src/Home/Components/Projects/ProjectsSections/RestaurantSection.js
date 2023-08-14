import React from 'react';
import "../Projects.css"
// import Restaurant from ".././Images/Screenshots/RestuarantSS"
import Knex from  "../Tech/Knex_cropped.png"
import HtmlImage from  "../Tech/HTML_cropped.png"
import Node from "../Tech/Knex_cropped.png"
import Express from "../Tech/Knex_cropped.png"
import GitHubLogo from "../../../Images/logos/github-logo.png"
import PostgreSQL from "../Tech/PostgreSQL_cropped.png"
import JavaScript from "../Tech/JavaScript_cropped.png"
import RestApis_cropped from "../Tech/Knex_cropped.png"
import ReactImage from  "../Tech/React_cropped.png"
import Bootstrap from  "../Tech/bootstrap_cropped.png"
import Css from  "../Tech/Css_cropped.png"
import Restaurant from "../Screenshots/RestaurantSS.png"


function RestaurantSection(){
    const gitHubClick = () => {
        const url = 'https://github.com/Mel-Hay/Capstone_Project';  // Replace with your link
        window.open(url, '_blank');
    };

    const deployedClick = () => {
        const url = 'https://capstone-project-front-end.vercel.app/dashboard';  // Replace with your link
        window.open(url, '_blank');
    };
    
    return(
    <section id="RestaurantSection" className="d-flex row">
      <div className="col-12">
          <h3 className="Title">
            Title: <span className="ProjectTitle">Restuarant Reservation Manager </span>{" "}
          </h3>
        </div>

      
        <div className="row">
        

        <div className="d-flex col-12 col-md-6" id="RestaurantDiv">
          <img
            src={Restaurant}
            alt="Restaurant image"
            style={{ height: "90%" }}
            id="RestaurantImage"
          />
        </div>
        <div className="col-12 col-md-6">
        <div className="">
          <p>
            <span style={{ fontSize: "1.5em" }}>Description: </span>
                I have been hired as a full stack developer at Periodic Tables, 
                a startup that is creating a reservation system for fine dining restaurants. 
                The software is used only by restaurant personnel when a customer calls to request a reservation. 
                At this point, the customers will not access the system online.
          </p>

          <div id="SkillsList"className="d-flex flex-wrap align-items-center">
          <h3 className="h3Skills">Skills: </h3>
            <img
            className="skillsLogo"
            src={Knex}
            alt="Knex Logo"
            style={{ width: "18%"}}
            id="KnexImage"/>

            <img
            className="skillsLogo"
            src={ReactImage}
            alt="React Logo"
            style={{ width: "18%"}}
            id="ReactImage"/>
            
            <img
            className="skillsLogo"
            src={Node}
            alt="Node logo"
            style={{ width: "18%"}}
            id="NodeImage"/>

            <img
            className="skillsLogo"
            src={Express}
            alt="Express logo"
            style={{ width: "18%"}}
            id="ExpressImage"/>

            <img
            className="skillsLogo"
            src={RestApis_cropped}
            alt="Html Logo"
            style={{ width: "19%"}}
            id="RestApiImage"/>

            <img
            className="skillsLogo"
            src={PostgreSQL}
            alt="Express logo"
            style={{ width: "20%"}}
            id="PostgreSQLImage"/>

            <img
            className="skillsLogo"
            src={JavaScript}
            alt="Express logo"
            style={{ width: "20%"}}
            id="JavaScriptImage"/>

            <img
            className="skillsLogo"
            src={HtmlImage}
            alt="Html Logo"
            style={{ width: "15%"}}
            id="HtmlImage"/>
                
            <img
            className="skillsLogo"
            src={Bootstrap}
            alt="Bootstrap logo"
            style={{ width: "20%"}}
            id="BootstrapImage"/>

            <img
            className="skillsLogo"
            src={Css}
            alt="Css logo"
            style={{ width: "12%"}}
            id="CssImage"/>
         
        </div>
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
              id="GitHubButton"
            >
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
    )
}

export default RestaurantSection