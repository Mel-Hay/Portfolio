import React from 'react';
import "../HomeStyle.css"
import GrubDash from "../Images/Screenshots/GrubDashSS.png"
import Knex from "../Images/skills/Knex_cropped.png"
import RestApis_cropped from "../Images/skills/RestApis_cropped.png"
import Node from "../Images/skills/Node_cropped.png"
import Express from "../Images/skills/Express_cropped.png"
import GitHubLogo from "../Images/logos/github-logo.png"
import PostgreSQL from "../Images/skills/PostgreSQL_cropped.png"
import JavaScript from "../Images/skills/JavaScript_cropped.png"



function GrubDashSection(){
    const gitHubClick = () => {
        const url = 'https://github.com/Mel-Hay/GrubDash';  // Replace with your link
        window.open(url, '_blank');
    };

    const deployedClick = () => {
        const url = 'https://front-end-grubdash.onrender.com';  // Replace with your link
        window.open(url, '_blank');
    };
    
    return(
    <section id="GrubDashSection" className="d-flex row">
        <div className="d-flex-block col-6">

            <div className="d-flex row my-2">
                <h3>Title: <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>GrubDash </span> </h3>
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
                src={RestApis_cropped}
                alt="Html Logo"
                style={{ width: "19%"}}
                id="RestApiImage"/>
                
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

            </div>
                                
            <div className='my-4'>
                <p><span style={{ fontSize: '1.25em' }}>Description: </span>
                I've been hired as a backend developer for a new startup called GrubDash! 
                As another developer works on the design and frontend experience, 
                I have been tasked with setting up an API and building out specific routes 
                so that the frontend developers can demo some initial design ideas for the big bosses.
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
            <img
            src={GrubDash}
            alt="We Love Movies"
            style={{ width: "97%", height: "100%" }}
            id="GrubDashImage"/>
        </div>

        

    </section>
    )
}

export default GrubDashSection