import React, { useState, useEffect } from "react";
import BusCard from "../Components/BusCard";
import Filters from "../Components/Filters";
//import BusData from "../Data/BusData";
import { useSelector } from "react-redux";

const Available_bus_page = () => {
  const [showBus, setShowBus] = useState("");
  const [filteredBus, setFilteredBus] = useState([]);
  const fromTo = useSelector((state) => state.fromTo);

  useEffect(() => {
    const func = async () => {
      const myData = {
        From: fromTo.INIT_STATE.From,
        To: fromTo.INIT_STATE.To,
        DaysRunOn: fromTo.INIT_STATE.Day,
      };
      const queryString = new URLSearchParams(myData).toString();
      const buses = await fetch(`https://reserve-bus-booking-app.vercel.app/busData?${queryString}`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.error(error));

      setFilteredBus(buses);
    };
    func();
  }, []);

  return (
    <div className="flex flex-row ">
      <Filters />
      <div className="basis-3/4 mt-24 mb-5 mr-5">
        {filteredBus.map((bus, id) => (
          <BusCard
            key={id}
            busid={bus._id}
            busName={bus.BusName}
            busRating={bus.Rating}
            busFrom={bus.From}
            busTo={bus.To}
            busFromDate={fromTo.INIT_STATE.FromDate}
            busFromTime={bus.FromTime}
            busToDate={fromTo.INIT_STATE.ToDate.format("ll")}
            busToTime={bus.ToTime}
            busTimeInterval={bus.TimeInterval}
            busSeatsUpper={bus.seatsUpper}
            busSeatsLower={bus.seatsLower}
            showBus={showBus}
            setShowBus={setShowBus}
          />
        ))}
      </div>
    </div>
  );
};

export default Available_bus_page;
