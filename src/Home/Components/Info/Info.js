import React from "react";
import "./Info.css"

function Info(){

    return(
        <section id="Info" className="d-flex align-items-center flex-column">
          <div 
          style={{ width: "70%", margin: "0 auto" }}
          className="d-inline-flex py-5 ">

            <h5>
                <span style={{ fontSize: '1.5em' }}>Hi I'm Mel, </span>
                a creative full-stack engineer, blending innovation and functionality.
                I specialize in crafting responsive applications that seamlessly interact with databases elevating user experiences.
                I am confident my skillset <span style={{ fontStyle: 'italic' }}>will</span> be a great addition to your team.
            </h5>
          </div>          
        </section>
    )
}

export default Info
