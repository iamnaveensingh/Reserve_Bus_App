import React from "react";
import { useSelector } from "react-redux";
import BusInfoCard from "./BusInfoCard";

const BookingConfirmCard = () => {
  const userDetails = useSelector((state) => state.userDetails);
  const bookingTitles = ["Ticket ID:","Payment ID:","Passenger Details:","Contact Details:"]
  const bookingValues= ["56UHRFT","2545-326E3-7HHH",`${userDetails.INIT_STATE.res.Name},${userDetails.INIT_STATE.res.Gender}, ${userDetails.INIT_STATE.res.Age} yrs`,`${userDetails.INIT_STATE.res.MobileNo}`]
  
  return (
    <div className="mx-64 border-4 rounded-md">
      <div className="text-[#1FC84D] text-6xl mt-4">
        <ion-icon name="checkmark-circle-outline"></ion-icon>
      </div>
      <div className="font-bold text-2xl pb-4">Booking has been confirmed</div>
      <div className="flex justify-center text-slate-600">
        <div className="text-right mx-2">
          {bookingTitles.map((bookingTitle,id)=>(
            <div key={id} className="mb-2">{bookingTitle}</div>
          ))}
        </div>
        <div className="text-left mx-2">
          {bookingValues.map((bookingValue,id)=>(
            <div key={id} className="mb-2">{bookingValue}</div>
          ))}
        </div>
      </div> 
      <div className="mx-16 my-8">
        <BusInfoCard />
      </div>
    </div>
  );
};

export default BookingConfirmCard;
