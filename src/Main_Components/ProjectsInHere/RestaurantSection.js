import React from 'react';
import "../HomeStyle.css"
// import Restaurant from ".././Images/Screenshots/RestuarantSS"
import Knex from "../Images/skills/Knex_cropped.png"
import HtmlImage from "../Images/skills/HTML_cropped.png"
import Node from "../Images/skills/Node_cropped.png"
import Express from "../Images/skills/Express_cropped.png"
import GitHubLogo from "../Images/logos/github-logo.png"
import PostgreSQL from "../Images/skills/PostgreSQL_cropped.png"
import JavaScript from "../Images/skills/JavaScript_cropped.png"
import RestApis_cropped from "../Images/skills/RestApis_cropped.png"
import ReactImage from "../Images/skills/React_cropped.png"
import Bootstrap from "../Images/skills/bootstrap_cropped.png"
import Css from "../Images/skills/Css_cropped.png"

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
        <div className="d-flex-block col-6">

            <div className="d-flex row my-2">
                <h3>Title: <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Restuarant Reservation Manager </span> </h3>
            </div>
                            
            <div className="d-flex flex-wrap align-items-center">
                <h3 className="mx-1">Skills: </h3>

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
                                
            <div className='my-4'>
                <p><span style={{ fontSize: '1.25em' }}>Description: </span>
                I have been hired as a full stack developer at Periodic Tables, 
                a startup that is creating a reservation system for fine dining restaurants. 
                The software is used only by restaurant personnel when a customer calls to request a reservation. 
                At this point, the customers will not access the system online.
                </p>
            </div>

            <div className='d-flex row'>
                <div className="d-flex col-6">
                    <button 
                    onClick={deployedClick}
                    style={{ width: "95%"}}>
                        Deployed Website
                    </button>
                </div>

                <div className="d-flex col-6">
                    <button 
                    id="GitHubButton" 
                    style={{ width: "95%"}}
                    onClick={gitHubClick}>
                        <span>
                        <img className='mx-2'
                            // className="skillsLogo"
                            src={GitHubLogo}
                            alt="GitHub logo"
                            style={{ width: "15%"}}
                            id="gitHubImage"/>
                        </span>
                        GitHub Repository
                    </button>
                </div>

            </div>                
        </div>

        <div className="d-flex col-6 px-1">
            {/* <img
            src={Restaurant}
            alt="We Love Movies"
            style={{ width: "97%", height: "100%" }}
            id="RestaurantImage"/> */}
        </div>

        

    </section>
    )
}

export default RestaurantSection