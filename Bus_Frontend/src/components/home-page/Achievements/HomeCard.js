import React from "react";
import { Card } from "./Card";
import "../../../styles/Home-page/Achievements.css";
import logo1 from "../../../resources/bus-logo1.png";
import logo2 from "../../../resources/bus-logo2.png";
import logo3 from "../../../resources/bus-logo3.png";

const data = [
  {
    image: logo1,
    text1: "2000 +",
    text2: "Bus Collection",
  },
  {
    image: logo2,
    text1: "20 Million",
    text2: "Happy Customers Globally",
  },
  {
    image: logo3,
    text1: "5000 +",
    text2: "Tickets Book Everyday",
  },
];

export const HomeCard = () => {
  return (
    <div className="home-card">
      <div className="home-card-heading">
        <h1>Travel with worlds largest bus</h1>
      </div>
      <div className="cards">
        {data.map((el, i) => (
          <Card key={i} image={el.image} text1={el.text1} text2={el.text2} />
        ))}
      </div>
    </div>
  );
};
