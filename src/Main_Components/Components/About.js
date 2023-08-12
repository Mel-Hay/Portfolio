import React from "react";
import "../HomeStyle.css"

import profilePic from "../Images/website_picture.png"

function About(){
    return (
        <section id="About" className="container-fluid  bg" style={{ paddingBottom:"0", paddingTop:"5%"}}>
            <div className="row justify-content-between py-2 bg" style={{ width: "90%", margin: "0 auto" }}>

                <div className="col-md-6 d-block justify-content-center" style={{ paddingBottom:"0", paddingTop:"5%"}}>
                    
                    <div style={{ paddingTop:"20%", paddingBottom:"0%" }}>
                        <img
                        className=""
                        src={profilePic}
                        alt="Picture of Me"
                        style={{ width: "75%"}}
                        id="ProfilePicImage"/>
                    </div>
                </div>

                <div className="col-md-6">
                    <h3>About Me</h3>
                    <p>
                    Motivated full-stack software engineer with expertise in both front-end and 
                    back-end development, honed through a rigorous software engineering program. 
                    Eager to leverage my analytical and technical acumen in an entry-level 
                    development role, ideally within a dynamic team that values growth and 
                    challenge.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About