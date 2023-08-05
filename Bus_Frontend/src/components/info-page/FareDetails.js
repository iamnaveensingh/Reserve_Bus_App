import React from "react";
import { Button } from "../ui/Button/Button";

const FareDetails = ({ price, onSubmitHandler }) => {
  return (
    <div className="fare-details-container">
      <div className="travel-details-heading" style={{ margin: 0 }}>
        <h3>Fare Details</h3>
      </div>
      <div className="fare-detail-container">
        <div className="fare-detail">
          <h4 className="fare-detail-content">Base Fare</h4>
          <span className="fare-amt">{price}</span>
        </div>
        <div className="fare-detail">
          <h4 className="fare-detail-content">Tax</h4>
          <span className="fare-amt">0</span>
        </div>
      </div>
      <div className="fare-detail">
        <h3 className="fare-detail-content">Total Price</h3>
        <span
          className="fare-amt"
          style={{ fontSize: "20px", fontWeight: "600" }}
        >
          {price}
        </span>
      </div>
      <div className="fare-btn" onClick={onSubmitHandler}>
        <Button name={"Proceed To Payment"} />
      </div>
    </div>
  );
};

export default FareDetails;
