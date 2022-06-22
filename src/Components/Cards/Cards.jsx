import React from "react";
import Card from "../Card/Card";
import "./Cards.css";
import img1 from "../../imgs/food1.jpg";
import img2 from "../../imgs/food2.jpg";
import img3 from "../../imgs/food3.png";

function Cards() {
  const data = [
    {
      img: img1,
      tittle: "Recipie Title",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
    },
    {
      img: img2,
      tittle: "Recipie Title",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
    },
    {
      img: img3,
      tittle: "Recipie Title",
      dis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, fermentum amet faucibus sed id nisi lectus at.",
    },
  ];
  return (
    <div className="cards">
      {data.map((item) => {
        return <Card img={item.img} tittle={item.tittle} dis={item.dis} />;
      })}
    </div>
  );
}

export default Cards;
