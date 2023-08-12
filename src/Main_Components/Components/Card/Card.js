import React, { useState } from "react";
import "./Card.css";
import GmailLogo from "../../Images/logos/GmailLogo.png";
import LinkedInLogo from "../../Images/logos/LinkedInLogo.png";
import GitHubLogo from "../../Images/logos/GitHubLogo.png";

const openGmail = () => {
  const url = "https://www.example.com"; // Replace with your link
  window.open(url, "_blank");
};

const openLinkedIn = () => {
  const url = "https://www.linkedin.com/in/mel-hay/"; // Replace with your link
  window.open(url, "_blank");
};

const openGitHub = () => {
  const url = "https://github.com/Mel-Hay"; // Replace with your link
  window.open(url, "_blank");
};

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      id="Card"
      className="px-5 py-4 w-100 d-flex align-items-center justify-content-center"
    >
      <div className="text-center ">
        <h1 >Contact me</h1>

        <div
          className={`card ${isFlipped ? "flipped" : ""}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="card-front"></div>

          <div className="card-back">
            <div className="col-6"></div>

            <div className="col-6 "style={{ height: "100%" }}>

              <div className="d-flex flex-column justify-content-center align-items-start">

                <div 
                style={{marginTop: "10px" }}
                className="d-inline-flex align-items-center p-2">

                  <img
                    src={GmailLogo}
                    alt="Gmail Logo"
                    style={{ width: "30px", marginRight: "10px" }}
                    id="GmailImage"
                    
                  />
                  <p style={{  margin:"0" }}>mel.hay.work@gmail.com</p>
                </div>

                <div className="d-inline-flex align-items-center mb-2 px-2" onClick={openLinkedIn}>
                  <img
                    src={LinkedInLogo}
                    alt="LinkedIn Logo"
                    style={{ width: "30px", marginRight: "30px" }}
                    id="LinkedInImage"
                  />
                  <p style={{  margin:"0" }}>@Mel-Hay</p>
                </div>

                <div className="d-inline-flex align-items-center mb-2 "onClick={openGitHub}>
                  <img
                    src={GitHubLogo}
                    alt="GitHub logo"
                    style={{ width: "70px",  }}
                    id="GitHubImage"
                    
                  />
                  <p style={{  margin:"0" }}>@Mel-Hay</p>
                </div>
                
                <div  style={{marginTop: "55px" }}>
                    <p className="m-0">+219-218-1803</p>
                    <p className="m-0 px-3">Located in Kankakee, IL.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
