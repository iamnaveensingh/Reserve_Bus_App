import React from "react";

const BookingDetails = ({ userDetails }) => {
  const { name, email, mobile, gender, age, id, paymentId } = userDetails;
  return (
    <div className="booking-details">
      <div className="booking-detail">
        <div className="left-side-detail">Ticket Id:</div>
        <div className="right-side-detail">{id}</div>
      </div>
      <div className="booking-detail">
        <div className="left-side-detail">Payment Id:</div>
        <div className="right-side-detail">{paymentId}</div>
      </div>
      <div className="booking-detail">
        <div className="left-side-detail">Passenger Details:</div>
        <div className="right-side-detail">
          {gender},{age},{name.toUpperCase()}
        </div>
      </div>
      <div className="booking-detail">
        <div className="left-side-detail">Contact Details:</div>
        <div className="right-side-detail">{mobile}</div>
      </div>
    </div>
  );
};

export default BookingDetails;
