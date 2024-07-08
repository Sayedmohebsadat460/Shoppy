import React from "react";

const NewsletterSection = () => {
  return (
    <div
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white aos-init aos-animate"
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-photo/abstract-background-design-images-wallpaper-ai-generated_643360-316154.jpg?w=740")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
      data-aos="zoom-in"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full p-3"
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
