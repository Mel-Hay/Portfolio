import React from 'react';
import "../HomeStyle.css"
import ThinkfulBnb from ".././Images/Screenshots/ThinkfulBnbSS.png"
import HtmlImage from "../Images/skills/HTML_cropped.png"
import Bootstrap from "../Images/skills/bootstrap_cropped.png"
import Css from "../Images/skills/Css_cropped.png"
import GitHubLogo from "../Images/logos/github-logo.png"

function ThinkfulBnbSection(){
    const gitHubClick = () => {
        const url = 'https://github.com/Mel-Hay/ThinkfulBnb';  // Replace with your link
        window.open(url, '_blank');
    };

    const deployedClick = () => {
        const url = 'https://front-end-ThinkfulBnb.onrender.com';  // Replace with your link
        window.open(url, '_blank');
    };
    
    return(
    <section id="ThinkfulBnbSection" className="d-flex row">
        <div className="d-flex-block col-6">

            <div className="d-flex row my-2">
                <h3>Title: <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>ThinkfulBnb </span> </h3>
            </div>
                            
            <div className="d-flex ">
                <h3 className="mx-1">Skills: </h3>
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
                Thinkfulbnb is a vacation rental website that allows people to rent out their 
                homes to people who are seeking short-term accommodations in that locale. 
                Thinkfulbnb hosts rent out different kinds of properties, including single rooms, apartments, 
                and unique living spaces such as yachts, houseboats, yurts, tiny houses, and even  
                renovated medieval castles.
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
            src={ThinkfulBnb}
            alt="We Love Movies"
            style={{ width: "97%", height: "80%" }}
            id="ThinkfulBnbImage"/>
        </div>

    </section>
    )
}

export default ThinkfulBnbSection