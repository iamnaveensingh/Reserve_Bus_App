import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { MdWavingHand } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import "../../styles/UserLogin/LoginInPage.css";

export const LogInPage = () => {
  // Here is have used useState to handle the state of the forms.
  const [enteredUserEmailSignIn, setUserEnteredEmailSignIn] = useState("");
  const [enteredUserPasswordSignIn, setUserEnteredPasswordSignIn] =
    useState("");
  // This are the Functions which is used to called while onChange in forms state.
  const signInEmailLoginChangeHandler = (event) => {
    setUserEnteredEmailSignIn(event.target.value);
  };
  const signInPasswordLoginChangeHandler = (event) => {
    setUserEnteredPasswordSignIn(event.target.value);
  };
  // This is called a Click Here button is clicked Shows an Alert.
  const handleClick = () => {
    window.alert("We will Implement it Soon !");
  };
  return (
    <>
      <div className="all-inside">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form className="login-user">
          <h3>
            Welcome <MdWavingHand />
          </h3>
          <label htmlFor="username" className="user-name">
            UserName
          </label>
          <input
            type="email"
            placeholder="Email"
            id="username"
            value={enteredUserEmailSignIn}
            onChange={signInEmailLoginChangeHandler}
          />
          <label htmlFor="userpassword" className="user-name">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="userpassword"
            value={enteredUserPasswordSignIn}
            onChange={signInPasswordLoginChangeHandler}
          />
          <button className="click-here" onClick={handleClick}>
            <Link to="/">
              Click Here <BsArrowRight size={25} />
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
