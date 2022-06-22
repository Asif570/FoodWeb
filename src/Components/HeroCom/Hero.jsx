import React from "react";
import "./Hero.css";
import Heroimg from "../../imgs/Hero.png";

function Hero() {
  return (
    <div className="Hero">
      <div className="section">
        <div className="">
          <div className="text">
            <h1>
              <span>Skip </span> The Diet, Just Eat Healthy With Food Network
            </h1>
            <span>
              Imagine you don't need a diet because we provide healthy and
              delicious food for you!
            </span>
            <div className="">
              <a href="#">Order Food</a>
            </div>
          </div>
          <div className="img">
            <img src={Heroimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
