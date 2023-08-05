import React from "react";
import { Button } from "../ui/Button/Button";
import "../../styles/Bus-display/busticket.css";
import { useNavigate } from "react-router-dom";

const BusTicket = ({ selectedBus }) => {
  const { bus } = selectedBus;
  const { fare } = selectedBus.selectedBus;
  const seats = selectedBus.selectedBus.seletedSeats;
  const mappedSeats =
    seats.length === 0 ? "0" : seats.map((el) => el.seatNumber).join(",");
  const price = seats.length === 0 ? "0" : seats.length * fare;
  const navigate = useNavigate();
  const onSubmitHandler = () => {
    if (seats.length === 0) {
      return;
    }
    navigate("/info");
  };
  return (
    <div className="bus-ticket-container">
      <div className="bus-ticket-heading">
        <h3 className="heading">Boarding and Dropping</h3>
      </div>
      <br />
      <div className="bus-ticket-destination d-flex">
        <div className="left-part">
          <p className="destination">{bus.source} </p>
          <p className="destination-sub-heading">Taxi Stand, Mughal Road</p>
        </div>
        <div className="right-part">
          <p>{bus.departureTime}</p>
        </div>
      </div>
      <div className="bus-ticket-destination d-flex">
        <div className="left-part">
          <p className="destination">{bus.destination} </p>
          <p className="destination-sub-heading">Taxi Stand, Mughal Road</p>
        </div>
        <div className="right-part">
          <p>{bus.arrivalTime}</p>
        </div>
      </div>
      <div className="seat-number d-flex">
        <p>Seat No.</p>
        <p>{mappedSeats}</p>
      </div>
      <div className="fare-details">
        <div className="bus-ticket-heading">
          <p>Fare Details</p>
        </div>
        <div className="fare d-flex">
          <div className="fare-amount">
            <p className="destination">Amount</p>
            <p className="destination-sub-heading">Taxi Stand, Mughal Road</p>
          </div>
          <div className="fare-price">
            <p>INR {price}</p>
          </div>
        </div>
      </div>
      <br />
      <div className="proceed-btn" onClick={onSubmitHandler}>
        <Button name={"Proceed To Book"} />
      </div>
    </div>
  );
};

export default BusTicket;
