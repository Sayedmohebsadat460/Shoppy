import React from "react";
import women1 from "../../assets/women-NhG2D3pl.png";
import women2 from "../../assets/women2-wroTMLvf.jpg";
import women3 from "../../assets/women3-HFaPDX0l.jpg";
import women4 from "../../assets/women4-zXERyOhD.jpg";

const ProductList = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            <div data-aos="fade-up" data-aos-delay="0" className="space-y-3">
              <img
                src={women1}
                alt=""
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">Women Ethnic</h3>
                <p className="text-sm text-gray-600">white</p>
                <div className="flex items-center gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="text-yellow-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                  </svg>
                  <span>5</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="space-y-3">
              <img
                src={women2}
                alt=""
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">Women western</h3>
                <p className="text-sm text-gray-600">Red</p>
                <div className="flex items-center gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="text-yellow-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                  </svg>
                  <span>4.5</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className="space-y-3">
              <img
                src={women3}
                alt=""
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">Goggles</h3>
                <p className="text-sm text-gray-600">brown</p>
                <div className="flex items-center gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="text-yellow-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                  </svg>
                  <span>4.7</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="600" className="space-y-3">
              <img
                src={women4}
                alt=""
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">Printed T-Shirt</h3>
                <p className="text-sm text-gray-600">Yellow</p>
                <div className="flex items-center gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="text-yellow-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                  </svg>
                  <span>4.4</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="800" className="space-y-3">
              <img
                src={women2}
                alt=""
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">Fashin T-Shirt</h3>
                <p className="text-sm text-gray-600">Pink</p>
                <div className="flex items-center gap-1">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="text-yellow-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                  </svg>
                  <span>4.5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-orange-500 text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
