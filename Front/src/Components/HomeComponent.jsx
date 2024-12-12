import React from "react";
import "../styles/HomeComponent.css"; // Import the CSS file
import whatsnew from "../assets/whatsnew.png";
import NavbarComponent from "./NavbarComponent";
import GeneratedComponent from "./GeneratedComponent ";

const HomeComponent = () => {
  return (
    <>
      <div className="home-container">
        <NavbarComponent />
        <div className="generated-container">
          <div className="rectangle-1">
            <div className="rectangle-2">
              <div style={{ display: "flex" }}>
                <img className="generated-image" src={whatsnew} alt="new" />
                <span className="what-new">What’s new</span>
              </div>
            </div>
            <span className="waitlist-text">
              Join our waitlist to get updates &amp; early access!
            </span>
          </div>
          <div className="cont">
            <p className="paragraph">
              Lower delivery costs with our innovative vehicle design
            </p>
            <p className="smallparagraph">
              Seamlessly integrating AI into your workflow, PearAI is a fork of
              VSCode and retains all its features, you’ll feel right at home
            </p>
          </div>
        </div>
        <GeneratedComponent />
      </div>
    </>
  );
};

export default HomeComponent;
