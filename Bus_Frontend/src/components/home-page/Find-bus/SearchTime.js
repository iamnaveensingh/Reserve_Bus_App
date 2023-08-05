import React, { useRef } from "react";

const SearchTime = ({ getDateHandler }) => {
  const ref = useRef();
  return (
    <div className="input">
      <div className="search-input">
        <p>Travel Date</p>
        <input
          type="date"
          id="travel"
          name="travel"
          ref={ref}
          onChange={() => getDateHandler(ref.current.valueAsDate)}
        />
      </div>
    </div>
  );
};

export default SearchTime;
