// NavBar.jsx
import React from "react";
import Logo from "../../assets/Logo.png";
import CartIcon from "../../assets/cart-icon.png"; // Replace with actual cart icon

const NavBar = ({ cart }) => {
  return (
    <div>
      {/* Upper Navbar */}
      <div className="flex justify-between items-center bg-[#F8DCA1] p-4">
        <div>
          <a href="#">
            <img src={Logo} alt="Logo" className="h-10" />
          </a>
        </div>
        {/* Search bar and order button */}
        <div className="flex items-center">
          <div className="group">
            <input
              type="text"
              placeholder="Search"
              className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400"
            />
          </div>
          <button className="ml-4 px-4 py-2 bg-orange-400 text-white rounded">
            Order
          </button>
          <div className="relative ml-4">
            <img src={CartIcon} alt="Cart" className="h-8 cursor-pointer" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </div>
      {/* Inner Navbar */}
      <div
        data-aos="zoom-in"
        className="flex justify-center aos-init aos-animate"
      >
        <ul className="sm:flex hidden items-center gap-4">
          <li>
            <a
              href="/#"
              className="inline-block px-4 hover:text-primary duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/#services"
              className="inline-block px-4 hover:text-primary duration-200"
            >
              Top Rated
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="inline-block px-4 hover:text-primary duration-200"
            >
              Kids Wear
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="inline-block px-4 hover:text-primary duration-200"
            >
              Mens Wear
            </a>
          </li>
          <li>
            <a
              href="/#"
              className="inline-block px-4 hover:text-primary duration-200"
            >
              Electronics
            </a>
          </li>
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  className="transition-all duration-200 group-hover:rotate-180"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                <li>
                  <a
                    href="/#"
                    className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                  >
                    Trending Products
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                  >
                    Best Selling
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                  >
                    Top Rated
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
