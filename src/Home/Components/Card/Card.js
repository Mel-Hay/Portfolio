import React, { useState } from "react";
import "./Card.css";
import GmailLogo from "../../Images/logos/GmailLogo.png";
import LinkedInLogo from "../../Images/logos/LinkedInLogo.png";
import GitHubLogo from "../../Images/logos/github-logo.png";

const openLinkedIn = () => {
  const url = "https://www.linkedin.com/in/mel-hay/";
  window.open(url, "_blank");
};

const openGitHub = () => {
  const url = "https://github.com/Mel-Hay";
  window.open(url, "_blank");
};

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="Contact" className="w-100 d-flex align-items-center">
      <div className="w-100">
        <h1>Contact me <span style={{fontSize:".65em"}}>(click)</span> </h1>

        <div className="container mobile-contact  justify-content-left">
          <div className="row align-items-center">
            <div className="col-3 grow-on-hover">
              <img src={GmailLogo} alt="Gmail Logo" id="GmailImage" />
            </div>
            <div className="col-9 mobileText">
              <h4 id="gmail">mel.hay.work @gmail.com</h4>
            </div>
          </div>

          <div className="row align-items-center" onClick={openLinkedIn}>
            <div className="col-3 grow-on-hover">
              <img src={LinkedInLogo} alt="LinkedIn Logo" id="LinkedInImage" />
            </div>
            <div className="col-9 mobileText">
              <h4>@Mel-Hay</h4>
            </div>
          </div>

          <div className="row align-items-center" onClick={openGitHub}>
            <div className="col-3 grow-on-hover">
              <img src={GitHubLogo} alt="GitHub logo" id="GitHubImage" />
            </div>
            <div className="col-9 mobileText">
              <h4>@Mel-Hay</h4>
            </div>
          </div>
        </div>

        <div
          className={`card ${isFlipped ? "flipped" : ""}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="card-front"></div>

          <div className="card-back">
            <div className="col-6"></div>

            <div className="col-6 imgLogos" style={{ height: "100%" }}>
              <div className="container md-contact  justify-content-left">
          <div className="row align-items-center">
            <div className="col-3 grow-on-hover">
              <img src={GmailLogo} alt="Gmail Logo" id="GmailImage" />
            </div>
            <div className="col-9 colText">
              <p>mel.hay.work @gmail.com</p>
            </div>
          </div>

          <div className="row align-items-center" onClick={openLinkedIn}>
            <div className="col-3 grow-on-hover">
              <img src={LinkedInLogo} alt="LinkedIn Logo" id="LinkedInImage" />
            </div>
            <div className="col-9 colText">
              <h4>@Mel-Hay</h4>
            </div>
          </div>

          <div className="row align-items-center" onClick={openGitHub}>
            <div className="col-3 grow-on-hover">
              <img src={GitHubLogo} alt="GitHub logo" id="GitHubImage" />
            </div>
            <div className="col-9 colText">
              <h4>@Mel-Hay</h4>
            </div>
          </div>
        </div>
              
              <div className=" row">
                <div className="d-flex col-12 justify-content-center">
                  <p className="">+219-218-1803</p>
                </div>
                <div className="d-flex col-12 justify-content-center">             
                  <p className="">Located in Kankakee, IL.</p>
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
