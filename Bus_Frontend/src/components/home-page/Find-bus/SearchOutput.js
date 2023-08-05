import React, { useState } from "react";
import { motion } from "framer-motion";

const SearchOutput = ({
  where,
  cityName,
  getDetails,
  cityData,
  selectCity,
}) => {
  const [modal, setmodal] = useState(false);
  const selectCityHander = (val) => {
    getDetails(val, where);
    setmodal(false);
  };
  return (
    <div className="input">
      <div className="search-input" onClick={() => setmodal((prev) => !prev)}>
        <p>{where}</p>
        <h4>{cityName}</h4>
      </div>
      {modal && (
        <motion.div
          className="search-outputs"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        >
          {cityData.map((el, i) => (
            <li
              className="search-input-city"
              key={i}
              onClick={(e) => selectCityHander(e.target.textContent)}
            >
              {el.source}
            </li>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default SearchOutput;
