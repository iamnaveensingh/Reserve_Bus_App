import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg w-72 mx-7 my-5 border-2 drop-shadow-md md:my-1 w-64 h-64">
        <img
          className="w-full h-40"
          src={props.imageURL}
          alt="bus"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
