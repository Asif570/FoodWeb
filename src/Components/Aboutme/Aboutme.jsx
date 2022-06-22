import React from "react";
import "./Aboutme.css";
import About from "../../imgs/Person Image.png";
import bg from "../../imgs/midbg.png";

function Aboutme() {
  return (
    <div className="Aboutme" style={{ backgroundImage: `url(${bg})` }}>
      <div className="section">
        <div>
          <div className="img">
            <img src={About} alt="" />
          </div>
          <div className="text">
            <h1>About me</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </span>
            <div>
              <a href="#">Contact me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
