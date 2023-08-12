import React, { useState } from "react";
import "./Skills.css";
import leftArrow from "../../Images/Left_Arrow.png";
import rightArrow from "../../Images/Right_Arrow.png";
import JavaScript from "../../Images/NoBgLogos/JSLogo.png";
import Html from "../../Images/NoBgLogos/HtmlNoBg.png";
import CSS from "../../Images/NoBgLogos/CssNoBg.png";
import Node from "../../Images/NoBgLogos/NodeJsNoBg.png";
import SQL from "../../Images/NoBgLogos/SqlNoBg.png";
import ReactImage from "../../Images/NoBgLogos/ReactNoBg.png";
import KnexImage from "../../Images/NoBgLogos/KnexLogo.png";

import PostGreSQL from "../../Images/NoBgLogos/PostgresNoBg.png";
import GitHub from "../../Images/logos/github-logo.png";
import ElephantSql from "../../Images/NoBgLogos/ElephantSQLNoBg.png";
import Postman from "../../Images/NoBgLogos/PostmanNoBg.png";
import Mocha from "../../Images/NoBgLogos/MochaNoBg.png";
import Chai from "../../Images/NoBgLogos/ChaiNoBg.png";
import DBeaver from "../../Images/NoBgLogos/DBeaverNoBg.png";
import VSCode from "../../Images/NoBgLogos/VsNoBg.png";
import Git from "../../Images/NoBgLogos/GitNoBg.png";
import GitBash from "../../Images/NoBgLogos/GitbashNoBg.png";
import Render from "../../Images/NoBgLogos/render.png";
import Vercel from "../../Images/NoBgLogos/Vercel.png";

function Skills() {
    const [isSkills, setIsSkills] = useState(true)

    const scroll = (direction) => {
        let far = (document.getElementById('skills').scrollWidth - document.getElementById('skills').clientWidth) / 3;
        if (direction === 'left') {
            document.getElementById('skills').scrollLeft -= far;
        } else {
            document.getElementById('skills').scrollLeft += far;
        }
    }

    const toggleSection = () => {
        setIsSkills(!isSkills);
        const skillsElement = document.getElementById('skills');
        if (skillsElement) {
            skillsElement.scrollLeft = 0;
        }
    }

    return (
        <section id="SkillSection"className="text-center align-items-center">
            <div className="switcher justify-content-center py-0 my-0" onClick={toggleSection}>
                <div className={`option ${isSkills ? 'selected' : ''}`}>Skills</div>
                <div className={`option ${!isSkills ? 'selected' : ''}`}>Tools</div>
            </div>
        <div className="skills-container w-100">
            
            <img src={leftArrow} alt="Left Arrow" className="arrow left-arrow" onClick={() => scroll('left')} />
           
            <div id="skills" className="skills">

            {isSkills ? (
                        
                        <>
                <div className="img-wrapper">
                    <img src={JavaScript} alt="JavaScript Logo" />
                    <h3 >JavaScript</h3> 
                </div>

                <div className="img-wrapper">
                    <img src={Html} alt="HTML Logo" />
                    <h3 >HTML 5</h3> 
                </div>

                <div className="img-wrapper">
                    <img src={CSS} alt="CSS Logo" />
                    <h3 >CSS</h3> 
                </div>

                <div className="img-wrapper">
                   <img src={ReactImage} alt="React Logo" />
                   <h3 >React.js</h3> 
                </div>

                <div className="img-wrapper">
                   <img src={Node} alt="Node.js Logo" />
                   <h3 >Node.js</h3> 
                </div>

                <div className="img-wrapper">
                   <img src={SQL} alt="SQL Logo" />
                   <h3 >SQL</h3> 
                </div>

                <div className="img-wrapper">
                   <img src={KnexImage} alt="Knex Logo" />
                   <h3 >Knex.js</h3> 
                </div>

                <div className="img-wrapper">
                   <img src={Mocha} alt="Mocha Logo" />
                   <h3 >Mocha</h3> 
                </div>

                <div className="img-wrapper">
                   <img src={Chai} alt="Chai Logo" />
                   <h3 >Chai</h3> 
                </div>

                <div className="img-wrapper">
                   <img src={Git} alt="Git Logo" />
                   <h3 >Git</h3> 
                </div>
                        </>
                    ) : (
                        
                        <>

                <div className="img-wrapper">
                    <img src={PostGreSQL} alt="PostGreSQL Logo" />
                    <h3 >PostGreSQL</h3> 
                </div>

                <div className="img-wrapper">
                    <img src={GitHub} alt="GitHub Logo" />
                    <h3 >GitHub </h3> 
                </div>

                <div className="img-wrapper">
                    <img src={ElephantSql} alt="ElephantSQL Logo" />
                    <h3 >ElephantSQL</h3> 
                </div>

                <div className="img-wrapper">
                   <img src={Postman} alt="Postman Logo" />
                   <h3 >Postman</h3> 
                </div>

                <div className="img-wrapper">
                   <img src={DBeaver} alt="DBeaver Logo" />
                   <h3 >DBeaver</h3> 
                </div>

                <div className="img-wrapper">
                   <img src={VSCode} alt="Visual Studio Logo" />
                   <h3 >VS Code</h3> 
                </div>

                <div className="img-wrapper">
                   <img src={GitBash} alt="GitBash Logo" />
                   <h3 >GitBash</h3> 
                </div>

                <div className="img-wrapper">
                   <img src={Vercel} alt="Vercel Logo" />
                   <h3 >Vercel</h3> 
                </div>

                <div className="img-wrapper">
                   <img className="py-5"src={Render} alt="Render Logo" />
                   <h3 >Render</h3> 
                </div>
                        </>
                    )}

            </div>
            <img src={rightArrow} alt="Right Arrow" className="arrow right-arrow" onClick={() => scroll('right')} />
        </div>
        </ section>
    );
}

export default Skills;