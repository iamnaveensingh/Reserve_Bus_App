import React from "react";
import { Button } from "../ui/Button/Button";
import "../../styles/Header/header.css";
import { NavLink, Link } from "react-router-dom";
import { FaBus } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <NavLink to={"/"}>
          <div className="header-logo" style={{ cursor: "pointer" }}>
            <FaBus className="BusIcon" /> <span></span> <h3>RESERVE</h3>
          </div>
        </NavLink>
        <div className="header-links">
          <a href="">Ticket</a>
        </div>
        <div className="header-links">
          <a href="">Contact us</a>
        </div>
      </div>
      <div className="header-right">
        <div>
          <Link to="./LoginPage">
            <Button name={"Login"} />
          </Link>
        </div>
        <div className="header-register">
          <Link to="./RegisterPage">
            <Button name={"Register"} />
          </Link>
        </div>
      </div>
    </div>
  );
};
