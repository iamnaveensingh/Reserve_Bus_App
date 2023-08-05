import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { MdOutlineWavingHand } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import "../../styles/UserRegister/RegisterPage.css";

export const RegisterPage = () => {
  // Here is have used useState to handle the state of the forms.
  const [enteredUserFirstName, setUserEnteredFirstName] = useState("");
  const [enteredUserLastName, setUserEnteredLastName] = useState("");
  const [enteredUserPhoneNumber, setUserEnteredPhoneNumber] = useState("");
  const [enteredUserEmail, setUserEnteredEmail] = useState("");
  const [enteredUserPassword, setUserEnteredPassword] = useState("");
  // This are the Functions which is used to called while onChange in forms state.
  const firstNameChangeHandler = (event) => {
    setUserEnteredFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setUserEnteredLastName(event.target.value);
  };
  const phoneNumberChangeHandler = (event) => {
    setUserEnteredPhoneNumber(event.target.value);
  };
  const emailLoginChangeHandler = (event) => {
    setUserEnteredEmail(event.target.value);
  };
  const passwordLoginChangeHandler = (event) => {
    setUserEnteredPassword(event.target.value);
  };
  // This is called a Click Here button is clicked Shows an Alert.
  const handleClick = () => {
    window.alert("We will Implement it Soon !");
  };
  return (
    <>
      <div className="all-inside">
        <div className="background-two">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form className="login-user-two">
          <h3 className="Hi-user">
            Hi! User <MdOutlineWavingHand />
          </h3>
          <label htmlFor="usersignup" className="user-name-two">
            FirstName
          </label>
          <input
            type="text"
            placeholder="FirstName"
            id="usersignup"
            value={enteredUserFirstName}
            onChange={firstNameChangeHandler}
          />
          <label htmlFor="usersignup-two" className="user-name-two">
            LastName
          </label>
          <input
            type="text"
            placeholder="LastName"
            id="usersignup-two"
            value={enteredUserLastName}
            onChange={lastNameChangeHandler}
          />
          <label htmlFor="usersignup-three" className="user-name-two">
            PhoneNumber
          </label>
          <input
            type="number"
            placeholder="PhoneNumber"
            id="usersignup-three"
            value={enteredUserPhoneNumber}
            onChange={phoneNumberChangeHandler}
          />
          <label htmlFor="usersiguppassword" className="user-name-two">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            id="usersiguppassword"
            value={enteredUserEmail}
            onChange={emailLoginChangeHandler}
          />
          <label htmlFor="usersiguppassword-two" className="user-name-two">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="usersiguppassword-two"
            value={enteredUserPassword}
            onChange={passwordLoginChangeHandler}
          />
          <button className="click-here" onClick={handleClick}>
            <Link to="/">
              Sign Up <FaHandshake size={25} />
            </Link>
          </button>
          <div className="social">
            <div className="go">
              <i className="fab fa-google"></i> <FcGoogle size={35} />
            </div>
            <div className="fb">
              <i className="fab fa-facebook"></i> <BsFacebook size={35} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
