import React from "react";
import FirstImg from "../../assets/shirt-cwf9SKdB.png";
import SecoundImg from "../../assets/shirt2-XQzG6elp.png";
import ThirtImg from "../../assets/shirt3-HwQ10bVo.png";
const TopRatedProducts = () => {
  return (
    <div className="container">
      <div className="text-center mb-24">
        <p
          data-aos="fade-up"
          className="text-sm text-primary aos-init aos-animate"
        >
          Top Rated Products for you
        </p>
        <h1
          data-aos="fade-up"
          className="text-3xl font-bold aos-init aos-animate"
        >
          Best Products
        </h1>
        <p
          data-aos="fade-up"
          className="text-xs text-gray-400 aos-init aos-animate"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          asperiores modi Sit asperiores modi
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 justify-items-center">
        {/* Product 1 */}
        <div
          data-aos="zoom-in"
          className="rounded-2xl bg-white hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] aos-init aos-animate"
        >
          <div className="h-[100px]">
            <img
              src={FirstImg}
              alt=""
              className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
            />
          </div>
          <div className="p-4 text-center">
            <div className="w-full flex items-center justify-center gap-1">
              {[...Array(4)].map((_, index) => (
                <svg
                  key={index}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="text-yellow-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                </svg>
              ))}
            </div>
            <h1 className="text-xl font-bold">Casual Wear</h1>
            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-orange-500 hover:scale-105 duration-300  text-black py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
              Order Now
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div
          data-aos="zoom-in"
          className="rounded-2xl bg-white  hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] aos-init aos-animate"
        >
          <div className="h-[100px]">
            <img
              src={SecoundImg}
              alt=""
              className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
            />
          </div>
          <div className="p-4 text-center">
            <div className="w-full flex items-center justify-center gap-1">
              {[...Array(4)].map((_, index) => (
                <svg
                  key={index}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="text-yellow-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                </svg>
              ))}
            </div>
            <h1 className="text-xl font-bold">Printed shirt</h1>
            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-orange-500 hover:scale-105 duration-300  text-black py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
              Order Now
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div
          data-aos="zoom-in"
          className="rounded-2xl bg-white  hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] aos-init aos-animate"
        >
          <div className="h-[100px]">
            <img
              src={ThirtImg}
              alt=""
              className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
            />
          </div>
          <div className="p-4 text-center">
            <div className="w-full flex items-center justify-center gap-1">
              {[...Array(4)].map((_, index) => (
                <svg
                  key={index}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="text-yellow-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                </svg>
              ))}
            </div>
            <h1 className="text-xl font-bold">Women shirt</h1>
            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-orange-500 hover:scale-105 duration-300  text-black py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedProducts;
