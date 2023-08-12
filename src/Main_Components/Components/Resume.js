import React from 'react';
import MyResume from "../Images/ResumePicture.png"
import { Document, Page } from 'react-pdf';

function Resume(){
      
    return (
        <div id='Resume'>
            <img             
                src={MyResume}
                alt="My Resume"
                className="my-1"
                style={{ width: "100%" }}/>
        </div>
    );
  }

export default Resume