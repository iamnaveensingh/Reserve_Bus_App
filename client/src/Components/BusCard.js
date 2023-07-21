import React, { useState } from "react";
import Seat from "./Seat";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBusData } from "../state/actions/busData";

const BusCard = (props) => {
  const links = ["Live Tracking", "Policies", "Photos", "Amenities", "Reviews"];
  const [filterPrice, setFilterPrice] = useState(0);
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [radioPriceFilter, setRadioPriceFilter] = useState("All");
  const [bookedSeats, setBookedSeats] = useState([]);

  const dispatch = useDispatch();

  const setFilter = (event) => {
    if (event.target.value === "699") {
      setRadioPriceFilter(699);
    } else if (event.target.value === "All") {
      setRadioPriceFilter("All");
    } else if (event.target.value === "899") {
      setRadioPriceFilter(899);
    } else if (event.target.value === "1199") {
      setRadioPriceFilter(1199);
    } else if (event.target.value === "1599") {
      setRadioPriceFilter(1599);
    }
  };

  const viewSeats = () => {
    props.busid === props.showBus
      ? props.setShowBus("")
      : props.setShowBus(props.busid);

    const func = async () => {
      console.log(props.busFromDate.format("yyyy-MM-DD"));
      let date = encodeURIComponent(props.busFromDate.format("yyyy-MM-DD"));
      const buses = await fetch(
        `https://reserve-bus-booking-app.vercel.app/fetchUserDetails?BusID=${props.busid}&FromDate=${date}`
      )
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.error(error));

      let seats = [];
      buses.forEach((bus) => bus.Seats.forEach((val) => seats.push(val)));
      setBookedSeats(seats);
    };
    func();
  };

  const a = {
    busID: props.busid,
    busName: props.busName,
    busRating: props.busRating,
    busFromDate: props.busFromDate.format("ll"),
    busFromTime: props.busFromTime,
    busToDate: props.busToDate,
    busToTime: props.busToTime,
    busTimeInterval: props.busTimeInterval,
    selectedSeat: selectedSeat,
    filterPrice: filterPrice,
  };

  const handleClick = async () => {
    await setBusData(dispatch, a);
  };

  return (
    <div className="mb-4 ">
      <div className="border-2 border-gray-300 flex rounded-md ">
        <div className="basis-3/4 border-r-2 border-gray-300 text-left p-4">
          <div className="flex ">
            <div className="font-bold">
              <span className="text-xl">{props.busName}</span>
              <span className="bg-[#119513] rounded-md text-white p-0.5 ml-2">
                <ion-icon name="star-outline"></ion-icon>
                {props.busRating}
              </span>
              <span className="px-2 text-gray-400 text-xs">Ratings</span>
            </div>
          </div>
          <div className="flex py-2 text-xs text-slate-500">
            <div>
              <span className="border-r pr-2 border-slate-600">
                AC Sleeper (2-1)
              </span>
            </div>
            <div>
              <span className="border-r px-2 border-slate-600">
                24 seats left
              </span>
            </div>
            <div>
              <span className="px-2">0 windows seat</span>
            </div>
          </div>
          <div className="flex py-2 ">
            <div>
              <span className=" pr-2 text-lg font-semibold">
                {props.busFromTime}, {props.busFromDate.format("ll")}
              </span>
            </div>
            <div>
              <span className="px-2 text-s text-slate-500 text-center align-middle">
                ----------{props.busTimeInterval}---------
              </span>
            </div>
            <div>
              <span className="px-2 text-lg font-semibold">
                {props.busToTime}, {props.busToDate}
              </span>
            </div>
          </div>
          <div className="flex text-blue-700 pt-8">
            {links.map((link, id) => (
              <div key={id} className="pr-8">
                {link}
              </div>
            ))}
          </div>
        </div>

        <div className="basis-1/4 p-4">
          <div className="text-md font-semibold">Trip Cost</div>
          <div className="pt-3 text-xs text-gray-500">Starting from</div>
          <div className="font-bold text-2xl">&#8377; 899</div>
          <button
            className="bg-[#FF8700] text-white font-[Poppins] mt-3 py-2 px-8 rounded  hover:bg-indigo-400 
    duration-500"
            onClick={viewSeats}
          >
            View Seat
          </button>
        </div>
      </div>
      {props.showBus === props.busid && (
        <div className="border-2 border-gray-300 rounded-md ">
          <div className="m-2 flex">
            <div className="basis-4/5 text-start">
              <div className="font-bold text-2xl ">Select Seats</div>
              <div className="flex my-4">
                <div className="text-gray-400">Seat Price</div>
                <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                    value="All"
                    defaultChecked={true}
                    onClick={setFilter}
                  />
                  <label className="text-sm ">&#8377;All</label>
                </div>
                <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                    value="699"
                    onClick={setFilter}
                  />
                  <label className="text-sm ">&#8377;699</label>
                </div>
                <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                    value="899"
                    onClick={setFilter}
                  />
                  <label className="text-sm ">&#8377;899</label>
                </div>
                <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                    value="1199"
                    onClick={setFilter}
                  />
                  <label className="text-sm ">&#8377;1199</label>
                </div>
                <div className="border-2 border-gray-300 mr-2 ml-4 px-2 text-gray-400 rounded-md">
                  <input
                    className="mr-2 leading-tight"
                    name="price"
                    type="radio"
                    value="1599"
                    onClick={setFilter}
                  />
                  <label className="text-sm ">&#8377;1599</label>
                </div>
              </div>
            </div>
            <div className="basis-1/5 text-start text-gray-600">
              <div className="flex my-2">
                <div className="mr-2 mt-1 leading-tight border-2 h-3 w-3" />
                <div className="text-sm">Vacant Seats</div>
              </div>
              <div className="flex my-2">
                <div
                  className="mr-2 mt-1 leading-tight border-2 h-3 w-3"
                  style={{ backgroundColor: "#838383" }}
                />
                <div className="text-sm">Reserved Seats</div>
              </div>
              <div className="flex my-2">
                <div
                  className="mr-2 mt-1 leading-tight border-2 h-3 w-3"
                  style={{ backgroundColor: "#0272F8" }}
                />
                <div className="text-sm">Selected Seats</div>
              </div>
            </div>
          </div>
          <div className="flex m-2 ">
            <div className="basis-2/3  mr-2 ">
              <div className="border-2 border-gray-300 mb-4 h-36 flex rounded-md">
                <div
                  className="rotate-180 text-gray-400 mt-2 text-xs"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span>Upper Birth</span>
                </div>
                <div className="mt-3 ml-4">
                  <div className="flex">
                    {props.busSeatsUpper.seatsTop.map((seat, id) => (
                      <Seat
                        key={id}
                        seatno={seat.seatNo}
                        price={seat.price}
                        setSelectedSeat={setSelectedSeat}
                        setFilterPrice={setFilterPrice}
                        radioPriceFilter={radioPriceFilter}
                        filterPrice={filterPrice}
                        selectedSeat={selectedSeat}
                        bookedSeats={bookedSeats}
                      />
                    ))}
                  </div>
                  <div className="flex mb-12">
                    {props.busSeatsUpper.seatsMiddle.map((seat, id) => (
                      <Seat
                        key={id}
                        seatno={seat.seatNo}
                        price={seat.price}
                        setSelectedSeat={setSelectedSeat}
                        setFilterPrice={setFilterPrice}
                        radioPriceFilter={radioPriceFilter}
                        filterPrice={filterPrice}
                        selectedSeat={selectedSeat}
                        bookedSeats={bookedSeats}
                      />
                    ))}
                  </div>
                  <div className="flex mb-2 ml-40">
                    {props.busSeatsUpper.seatsLower.map((seat, id) => (
                      <Seat
                        key={id}
                        seatno={seat.seatNo}
                        price={seat.price}
                        setSelectedSeat={setSelectedSeat}
                        setFilterPrice={setFilterPrice}
                        radioPriceFilter={radioPriceFilter}
                        filterPrice={filterPrice}
                        selectedSeat={selectedSeat}
                        bookedSeats={bookedSeats}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-2 border-gray-300 h-36 flex rounded-md">
                <div
                  className="rotate-180 text-gray-400 mt-2 text-xs"
                  style={{ writingMode: "vertical-rl" }}
                >
                  <span>Lower Birth</span>
                </div>
                <div className="mt-3 ml-4">
                  <div className="flex">
                    {props.busSeatsLower.seatsTop.map((seat, id) => (
                      <Seat
                        key={id}
                        seatno={seat.seatNo}
                        price={seat.price}
                        setSelectedSeat={setSelectedSeat}
                        setFilterPrice={setFilterPrice}
                        radioPriceFilter={radioPriceFilter}
                        filterPrice={filterPrice}
                        selectedSeat={selectedSeat}
                        bookedSeats={bookedSeats}
                      />
                    ))}
                  </div>
                  <div className="flex mb-12">
                    {props.busSeatsLower.seatsMiddle.map((seat, id) => (
                      <Seat
                        key={id}
                        seatno={seat.seatNo}
                        price={seat.price}
                        setSelectedSeat={setSelectedSeat}
                        setFilterPrice={setFilterPrice}
                        radioPriceFilter={radioPriceFilter}
                        filterPrice={filterPrice}
                        selectedSeat={selectedSeat}
                        bookedSeats={bookedSeats}
                      />
                    ))}
                  </div>
                  <div className="flex mb-2 ml-40">
                    {props.busSeatsLower.seatsLower.map((seat, id) => (
                      <Seat
                        key={id}
                        seatno={seat.seatNo}
                        price={seat.price}
                        setSelectedSeat={setSelectedSeat}
                        setFilterPrice={setFilterPrice}
                        radioPriceFilter={radioPriceFilter}
                        filterPrice={filterPrice}
                        selectedSeat={selectedSeat}
                        bookedSeats={bookedSeats}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/3 border-2 border-gray-300 rounded-md">
              <div className="my-2 mx-3 text-start">
                <div className="font-bold text-md">Boarding and Dropping</div>
                <div className="flex justify-between my-2">
                  <div className="text-xs">
                    <div className="font-semibold">-{props.busFrom}</div>
                    <div className="text-gray-400">
                      Taxi Service, Chhatrapati road
                    </div>
                  </div>
                  <div className="text-sm font-bold">{props.busFromTime}</div>
                </div>
                <div className="flex justify-between mt-2 border-b-2 border-gray-300 pb-2 pt-2">
                  <div className="text-xs ">
                    <div className="font-semibold">-{props.busTo}</div>
                    <div className="text-gray-400">
                      Taxi Service, Chhatrapati road
                    </div>
                  </div>
                  <div className="text-sm font-bold">{props.busToTime}</div>
                </div>
                <div className="flex justify-between text-sm font-bold border-b-2 border-gray-300 py-1">
                  <div>Seat No</div>
                  <div>{selectedSeat.join(", ")}</div>
                </div>
                <div className="text-sm font-bold py-1">Fare Details</div>
                <div className="flex justify-between my-1">
                  <div>
                    <div className="text-xs">Amount</div>
                    <div className="text-xs text-gray-400">
                      Taxi Service, Chhatrapati road
                    </div>
                  </div>
                  <div className="text-md font-bold">INR {filterPrice}</div>
                </div>
                <div>
                  <button
                    onClick={handleClick}
                    className="bg-[#FF8700] text-white font-[Poppins] mt-6 py-2 px-8 w-full rounded  hover:bg-indigo-400 
    duration-500"
                  >
                    <Link to="/info">Proceed to Book</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusCard;
