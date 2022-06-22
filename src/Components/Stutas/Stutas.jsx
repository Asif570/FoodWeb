import React from "react";
import "./Stutas.css";

function Stutas() {
  const data = [
    { tittle: "35K", dis: "Youtube Subscriber" },
    { tittle: "1.2m", dis: "Instagram Follower" },
    { tittle: "102K", dis: "Druble Short Link" },
  ];
  return (
    <div className="Stutas">
      <div className="section">
        <div className="cards">
          {data.map((item) => {
            return (
              <div>
                <h2>{item.tittle}</h2>
                <p>{item.dis}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Stutas;
