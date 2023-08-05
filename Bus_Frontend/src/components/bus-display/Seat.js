import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_seats } from "../../redux/action";

const Seat = ({ seatNumber, isAvailable, id, includes }) => {
  const dispatch = useDispatch();
  const seatHandler = () => {
    if (!isAvailable) {
      return;
    }
    const seatData = {
      seatNumber,
    };
    dispatch(add_seats(seatData));
  };
  const bg = isAvailable === false ? "grey" : includes ? "blue" : "";
  return (
    <span
      className="seat"
      style={{
        backgroundColor: `${bg}`,
      }}
      onClick={seatHandler}
    ></span>
  );
};

export default Seat;
