import React from "react";
import "./Footer.css";
import GmailLogo from "../../Images/logos/GmailLogo.png";
import LinkedInLogo from "../../Images/logos/LinkedInLogo.png";
import GitHubLogo from "../../Images/logos/github-logo.png";

function Footer() {
  const openLinkedIn = () => {
    const url = "https://www.linkedin.com/in/mel-hay/";
    window.open(url, "_blank");
  };

  const openGitHub = () => {
    const url = "https://github.com/Mel-Hay";
    window.open(url, "_blank");
  };

  return (
    <section id="Footer">
      <div className="container">
        <div className="d-flex row">
          <div className="d-inline-flex wImage">
            <img src={GmailLogo} alt="Gmail Logo"  className="grow-on-hover" id="GmailImage" />
            <p>mel.hay.work @gmail.com</p>
          </div>

          <div className="d-inline-flex wImage">
            <img src={LinkedInLogo} alt="LinkedIn Logo" className="grow-on-hover" id="LinkedInImage" onClick={openLinkedIn}/>
            <p>@Mel-Hay</p>
          </div>

          <div className="d-inline-flex wImage">
            <img src={GitHubLogo} alt="GitHub logo" id="GitHubImage" className="grow-on-hover" onClick={openGitHub}/>
            <p>@Mel-Hay</p>
          </div>
            
            <div className="d-inline-flex woImage">
                <p className="">+219-218-1803</p>
            </div>

            <div className="d-inline-flex woImage">
                <p className="">Located in Kankakee, IL.</p>
            </div>

        </div>
      </div>
    </section>
  );
}

export default Footer;
