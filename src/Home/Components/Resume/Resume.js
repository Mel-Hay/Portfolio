import React from 'react';

import "./Resume.css"
import ResumePng from "../../Images/Misc/ResumePng.png"

function Resume(){
      
    return (
        <section id='Resume' className='text-center' >
            <h1>Resume</h1>
            <div className="d-flex col-12" id="ResumeDiv">
              <img
                src={ResumePng}
                alt="Resume image"
                id="ResumeImage"/>

          </div>
        </section>
    );
  }

export default Resume