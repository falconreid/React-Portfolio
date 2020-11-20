import React from "react";
import "./styles.css";
import Tromso from "./Tromso-fjord.jpg";

function Portfolio() {
  return (
    //  Main Section
    <div id="main" style={{ backgroundImage: `url(${Tromso})` }}>
      <div className="container">
        <h1>Portfolio</h1>

        {/* Portfolio Graphics & Links */}
        <div className="row portfolioLinks">
          <div className="col-md-6">
            {" "}
            <a
              href="https://calm-brushlands-06057.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/HandleBurgerBar-btn.jpg"
                alt="HandleBurger Bar Link"
              />
            </a>
          </div>
          <div className="col-md-6">
            <a href="https://falconreid.github.io/EventSmash/index.html">
              <img
                src="images/EventSmashbtn.jpg"
                title="Event Smash: Effortless Event Planning"
                target="_blank"
                rel="noreferrer"
                alt="Event Smash: Effortless Event Planning"
              />
            </a>
          </div>
        </div>

        <div className="row portfolioLinks">
          <div className="col-md-6">
            <a
              href="https://falconreid.github.io/6-Weather-Dashboard-App/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/WeatherAppbtn.jpg"
                alt="Weather App"
                title="Weather App"
              />
            </a>
          </div>
          <div className="col-md-6">
            <a
              href="https://falconreid.github.io/5-Work-Day-Scheduler/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/DigitalDaytimerbtn.jpg"
                alt="Digital Daytimer"
                title="Digital Daytimer"
              />
            </a>
          </div>
        </div>

        <div className="row portfolioLinks">
          <div className="col-md-6">
            <a
              href="http://studdybuddyahasjbjt.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/StudyBuddy-Button.jpg" alt="" />
            </a>
          </div>
          <div className="col-md-6">
            <a
              href="https://github.com/falconreid/Employee-Management-System"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="images/Emp-Track-btn.jpg"
                alt="Employee Management System link"
              />
            </a>
          </div>
        </div>

        <div className="row portfolioLinks">
          <div className="col-md-6">
            <a
              href="https://still-wildwood-87381.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/FitBytes-btn.jpg" alt="" />
            </a>
          </div>
          <div className="col-md-6">
            <a
              href="RockPaperScissors.html"
              title="Rock Paper Scissors Game"
              alt="Rock Paper Scissors Game"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/RockPaperScissorsGame.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
