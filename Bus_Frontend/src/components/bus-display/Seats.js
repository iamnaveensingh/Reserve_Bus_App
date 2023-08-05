import React from "react";
import Seat from "./Seat";

const Seats = ({ seats, selectedSeats }) => {
  const includes = (seatNumber) => {
    return selectedSeats.some((el, i) => el.seatNumber === seatNumber);
  };
  return (
    <div className="bus-seats-component">
      <div className="bus-upper-seats">
        <h4>Upper Seat</h4>
        <br />
        <div className="upper-seat">
          {seats.map((el, i) => (
            <Seat
              key={el._id}
              seatNumber={el.seatNumber}
              isAvailable={el.isAvailable}
              id={el._id}
              includes={includes(el.seatNumber)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seats;
