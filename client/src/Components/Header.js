import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  let Links = [
    { name: "Ticket", link: "/" },
    { name: "Contact us", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=" w-full fixed top-0 left-0 z-40 border-b-4">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
          text-[#FF8700] "
        >
          <Link to="/" className="pb-2" onClick={() =>{props.setAuthentication(false)}}>
            <span className="text-3xl text-[#FF8700] mr-1 pt-2">
              <ion-icon name="bus"></ion-icon>
            </span>
            Reserve
          </Link>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`font-bold md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7 md:hidden"
            >
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          {!props.authentication && <><button
            className="bg-[#FF8700] text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500"
          >
            Login
          </button>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <a
              href="/"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Register
            </a>
          </li></>}
          {props.authentication && <li className="md:ml-8 text-xl md:my-0 my-7">
            <a
              href="/"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
            <div className="flex justify-center">
            <div className="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono h-[40px] w-[40px] text-xl bg-[orange] ">
              N
            </div>
            <div className="mt-2 ml-2">
              My Profile
            </div>
            </div>
            </a>
          </li>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
