import React, { useState } from "react";

const Seat = ({
  seatno,
  setSelectedSeat,
  setFilterPrice,
  price,
  radioPriceFilter,
  filterPrice,
  selectedSeat,
  bookedSeats
}) => {
  const [selectSeat, setSelectSeat] = useState(false);
  const [bgColor, setbgColor] = useState("");


  let ChangeColor = () => {
    if(!bookedSeats.includes(seatno)){
    if (radioPriceFilter === "All" || radioPriceFilter === price) {
      if (selectSeat === false) {
        setSelectSeat(true);
        setbgColor("#0272F8");
        setSelectedSeat([...selectedSeat,seatno]);
        setFilterPrice(filterPrice+price);
      } else {
        setSelectSeat(false);
        setbgColor("");
        setSelectedSeat(selectedSeat.filter((value)=>value !== seatno));
        setFilterPrice(filterPrice-price);
      }
    }
  }
  };
  return (
    <div>
      <button
        className={`border-2 ${
          radioPriceFilter === "All" || radioPriceFilter === price
            ? "border-gray-400"
            : "border-gray-200"
        } w-14 h-5 rounded-sm mx-3 hover:bg-slate-300`}
        style={{ background: (!bookedSeats.includes(seatno))?bgColor:'#838383 ' }}
        onClick={ChangeColor}
      ></button>
    </div>
  );
};

export default Seat;
