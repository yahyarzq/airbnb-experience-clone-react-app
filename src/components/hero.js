import React from "react";
import hero from "../icon/hero.png";

const Hero = () => (
  <div className="App-hero">
    <img src={hero} alt="Hero" className="hero-image" />
    <div className="hero-text">
      <h2>Online Experience</h2>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  </div>
);

export default Hero;
