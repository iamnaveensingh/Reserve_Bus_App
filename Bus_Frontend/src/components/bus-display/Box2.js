import React from "react";

export const Box2 = ({ text, search }) => {
  return (
    <div className="box">
      <p style={{ fontWeight: "800" }}>{text}</p>
      <div className="select-pickup">
        <div className="radio">
          <input type="checkbox" name="" id="" />
        </div>
        <label htmlFor="">Manali</label>
      </div>
      <div className="select-pickup">
        <div className="checkbox">
          <input type="checkbox" name="" id="" />
        </div>
        <label htmlFor="">Cheenai</label>
      </div>
      <div className="select-pickup">
        <div className="radio">
          <input type="checkbox" name="" id="" />
        </div>
        <label htmlFor="">Delhi</label>
      </div>
    </div>
  );
};
