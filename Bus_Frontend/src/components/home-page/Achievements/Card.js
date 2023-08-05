import React from "react";

export const Card = ({ image, text1, text2 }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={image} alt="" width={"200px"} />
      </div>
      <div className="middle-text">
        <p style={{ fontWeight: "800", fontSize: "21px" }}>{text1}</p>
      </div>
      <div className="last-text">
        <p style={{ color: "grey", fontSize: "17px", fontWeight: "bold" }}>
          {text2}
        </p>
      </div>
    </div>
  );
};
