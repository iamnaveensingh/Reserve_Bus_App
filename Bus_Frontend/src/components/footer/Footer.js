import React from "react";
import "../../styles/Footer/footer.css";
import { FaBus } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

export const Footer = () => {
  return (
    <>
      <main className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-text">
              <section className="logo_bus">
                <FaBus />
                <span></span> RESERVE
                <br />
              </section>
              <p>
                When you have a choice .Choose Reserve. <br />
                Reserve offers bus tickets booking <br />
                Through its website ,IOS ,and Android mobile apps for all major
                cities.
                <br />
                <br />
                reserve.bus@erserve.com
              </p>
            </div>
            <div className="all-content">
              <div className="footer-col">
                <ul>
                  <li>
                    <h4>About Us</h4>
                    <a href="#Home">About Us</a>
                  </li>
                  <li>
                    <a href="#Contacts">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <ul>
                  <li>
                    <h4>Useful Links</h4>
                    <a href="#Home">Careers</a>
                  </li>
                  <li>
                    <a href="#Home">FAQ</a>
                  </li>
                  <li>
                    <a href="#Home">T&C</a>
                  </li>
                  <li>
                    <a href="#Home">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#Home">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Follow us</h4>
                <div className="social-links">
                  <a href="#Home">
                    <FiFacebook />
                  </a>
                  <a href="#Home">
                    <FiInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
