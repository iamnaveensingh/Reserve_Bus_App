import React from "react";

const RatingCard = (props) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg w-[50vh] mx-7 my-5 drop-shadow-md md:my-1 bg-white p-3">
        <div className="flex justify-start">
          <div className="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono h-[50px] w-[50px] text-xl bg-[orange] ">
            {props.initial}
          </div>
          <div className="flex flex-col text-left pl-3">
            <div className="font-bold ">{props.name}</div>
            <div className="text-gray-500">Customer since {props.since}</div>
          </div>
        </div>
        <div className="text-left p-2 mt-2">
            <span className="bg-[#119513] rounded-md text-white p-0.5"><ion-icon name="star-outline"></ion-icon>4.5</span>
        </div>
        <div className="px-2  text-left">
          <p className="text-gray-500 text-base">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
