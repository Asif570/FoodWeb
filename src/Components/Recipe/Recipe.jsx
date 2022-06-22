import React from "react";
import Cards from "../Cards/Cards";
import "./Recipe.css";

function Recipe() {
  return (
    <div className="Recipe">
      <div className="section">
        <div>
          <h1>My recipies</h1>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </span>
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default Recipe;
