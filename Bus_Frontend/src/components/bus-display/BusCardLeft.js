import React from "react";
const BusCardLeft = ({
  data,
  routeId,
  arrivalTime,
  departureTime,
  destinaton,
  source,
}) => {
  const { _id, busName, fare, seats, type } = data;
  return (
    <>
      <div className="bus-card-left">
        <div className="bus-card-heading">
          <div className="bus-heading">
            <h2>{busName}</h2>
            <div className="bus-card-rating">4.8</div>
          </div>
          <div className="bus-details">
            <h3>{type}</h3>
          </div>
        </div>
        <div className="bus-itinerary">
          <h3>
            <span className="bus-destination">{departureTime} </span>
            <span style={{ fontSize: "14px" }}>
              ---- {""} Hrs {} Min's ----{" "}
            </span>
            <span className="bus-destination">{arrivalTime} </span>
          </h3>
        </div>
        <div className="bus-actions">
          <h4 className="bus-facilities">
            <span>Live tracking</span>
            <span>Policies</span>
            <span>Amenities</span>
            <span>Bus Phots</span>
            <span>Booking Policies</span>
            <span>Review</span>
            <span>Rest Stop</span>
          </h4>
        </div>
      </div>
    </>
  );
};

export default BusCardLeft;
