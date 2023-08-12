import React from 'react';
import "../HomeStyle.css"
import WeLoveMovies from "../Images/Screenshots/WeLoveMoviesSS.png"
import Knex from "../Images/skills/Knex_cropped.png"
import Node from "../Images/skills/Node_cropped.png"
import Express from "../Images/skills/Express_cropped.png"
import GitHubLogo from "../Images/logos/github-logo.png"
import PostgreSQL from "../Images/skills/PostgreSQL_cropped.png"
import JavaScript from "../Images/skills/JavaScript_cropped.png"
import RestApis_cropped from "../Images/skills/RestApis_cropped.png"

function WeLoveMoviesSection(){
    const gitHubClick = () => {
        const url = 'https://github.com/Mel-Hay/Movies-Project';  
        window.open(url, '_blank');
    };

    const deployedClick = () => {
        const url = 'https://welovemoviesproject-qv6y.onrender.com';  
        window.open(url, '_blank');
    };
    
    return(
    <section id="WeLoveMoviesSection" className="d-flex row">
        <div className="d-flex-block col-6">

            <div className="d-flex row my-2">
                <h3>Title:  <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>WeLoveMovies </span></h3>
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


            </div>
                                
            <div className='my-4'>
                <p><span style={{ fontSize: '1.25em' }}>Description: </span>
                    I have been hired as a backend developer at a new startup called WeLoveMovies. 
                    As another developer works on the design and frontend experience, 
                    I have been tasked with setting up a database and building out specific routes so that 
                    users can gain access to data about movies, theaters, and reviews.
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
                    onClick={gitHubClick}
                    id="GitHubButton" 
                    style={{ width: "95%"}}>
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

        <div className="d-flex col-6" id="WeLoveMoviesDiv" style={{}}>
            <img
            src={WeLoveMovies}
            alt="We Love Movies"
            style={{ margin: "0 auto 0 .5rem", height: "90%" }}
            id="WeLoveMoviesImage"/>
        </div>
    </section>
    )
}

export default WeLoveMoviesSection