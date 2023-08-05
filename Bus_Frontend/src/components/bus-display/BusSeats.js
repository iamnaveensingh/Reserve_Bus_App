import React from "react";
import "../../styles/Bus-display/busseat.css";
import BusTicket from "./BusTicket";
import PriceTags from "./PriceTags";
import Seats from "./Seats";

const BusSeats = ({ seats, selectedSeats, selectedBus }) => {
  return (
    <div className="bus-seats">
      <div className="bus-seat-heading">
        <h3>Select Seats</h3>
      </div>
      <div className="select-price">
        <div className="seat-prices">
          <span>
            <p>Seat Price</p>
          </span>
          <PriceTags />
        </div>
      </div>
      <div className="bus-seats-maincontainer">
        <div className="bus-seat-flex">
          <Seats seats={seats} selectedSeats={selectedSeats} />
          {/* <Seats seats={seats} selectedSeats={selectedSeats} /> */}
        </div>
        <BusTicket selectedBus={selectedBus} />
      </div>
    </div>
  );
};

export default BusSeats;
