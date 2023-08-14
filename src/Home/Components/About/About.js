import React from "react";
import "./About.css"
import profilePic from "../../Images/Misc/website_picture.png"

function About(){
    return (
        <section id="About" className="container-fluid  bg" >
            <div className="row justify-content-between py-2 bg" style={{ width: "90%", margin: "0 auto" }}>

                <div className="col-6 d-block justify-content-center" style={{ paddingBottom:"0", paddingTop:"5%"}}>
                    
                    <div style={{ paddingBottom:"0%" }}>
                        <img
                        className=""
                        src={profilePic}
                        alt="Picture of Me"
                        style={{ width: "55%"}}
                        id="ProfilePicImage"/>
                    </div>
                </div>

                <div className="col-md-6 py-3">
                    <h3>About Me</h3>
                    <p>
                    Motivated software engineer with expertise in both front-end and 
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