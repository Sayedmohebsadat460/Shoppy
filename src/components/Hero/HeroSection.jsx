import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import saleImage from "../../assets/sale-cnpHUeHf.png"; // اصلاح مسیر به دارایی‌های واقعی شما
import womenImage from "../../assets/women-NhG2D3pl.png";
import shoppingImage from "../../assets/shopping-vpNvhQDE.png";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center duration-200">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-8"></div>
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold aos-init aos-animate"
                >
                  70% off on all Products Sale
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-sm aos-init aos-animate"
                >
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  className="aos-init aos-animate"
                >
                  <button className="bg-orange-500 hover:scale-105 duration-200 text-black py-2 px-4 rounded-full">
                    Order Now
                  </button>
                </div>
              </div>
              <div className="order-1 sm:order-2">
                <div
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className="relative z-10 aos-init aos-animate"
                >
                  <img
                    src={saleImage}
                    alt=""
                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold aos-init aos-animate"
                >
                  Upto 50% off on all Men's Wear
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-sm aos-init aos-animate"
                >
                  lorem His Life will forever be Changed dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  className="aos-init aos-animate"
                >
                  <button className="bg-orange-500 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                    Order Now
                  </button>
                </div>
              </div>
              <div className="order-1 sm:order-2">
                <div
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className="relative z-10 aos-init aos-animate"
                >
                  <img
                    src={womenImage}
                    alt=""
                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold aos-init aos-animate"
                >
                  30% off on all Women's Wear
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-sm aos-init aos-animate"
                >
                  Who's there lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  className="aos-init aos-animate"
                >
                  <button className="bg-orange-500 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                    Order Now
                  </button>
                </div>
              </div>
              <div className="order-1 sm:order-2">
                <div
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className="relative z-10 aos-init aos-animate"
                >
                  <img
                    src={shoppingImage}
                    alt=""
                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
