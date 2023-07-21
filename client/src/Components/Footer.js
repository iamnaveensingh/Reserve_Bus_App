import React from "react";

const Footer = () => {
  return (
    <footer className="text-center lg:text-left bg-gray-300 text-gray-600">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 lg:grid-cols-5 gap-8">
          <div className="">
            <h3
              className="text-3xl
            text-[#FF8700]
            uppercase
            font-bold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
            >
              <span className="text-3xl text-[#FF8700] mr-1 pt-2">
                <ion-icon name="bus"></ion-icon>
              </span>
              Reserve
            </h3>
            <p>When you have a choice. Choose Reserve</p>
            <p className="py-2">
              Reserve offers bus tickets booking through its website,ios and
              android mobile apps for all major cities.
            </p>
            <p className="py-2">reserve.bus@reserve.com</p>
          </div>
          <div></div>
          <div className="">
            <h6 className="uppercase font-bold mb-4 flex justify-center text-[20px] md:justify-start">
              About
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                About us
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Contact us
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-bold mb-4 flex justify-center text-[20px] md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Careers
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                FAQ
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                T & C
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-600">
                Blog
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-bold mb-4 flex justify-center text-[20px] md:justify-start">
              Follow us
            </h6>
            <div className="flex justify-center md:justify-start">
              <a href="#!" className="mr-6 text-grey-600 ">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  className="w-2.5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </a>
              <a href="#!" className="mr-6 text-gray-600 ">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="w-3.5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-400 sm:mx-auto dark:border-gray-700 " />
      <div className="text-center p-6 bg-gray-300">
        <a
          className="text-gray-600 font-semibold"
          href="https://tailwind-elements.com/"
        >
          All rights reserved - 2022
        </a>
      </div>
    </footer>
  );
};

export default Footer;
