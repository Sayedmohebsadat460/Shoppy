import React from "react";
import Slider from "react-slick"; // Assuming you are using react-slick for the slider functionality
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme styles

const TestimonialsSlider = () => {
  // Sample data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Satya Nadella",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      image: "https://picsum.photos/102/102",
    },
    {
      id: 2,
      name: "Virat Kohli",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      image: "https://picsum.photos/104/104",
    },
    {
      id: 3,
      name: "Sachin Tendulkar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      image: "https://picsum.photos/103/103",
    },
    {
      id: 4,
      name: "Victor",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      image: "https://picsum.photos/101/101",
    },
  ];

  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">What our customers are saying</p>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        <div className="max-w-[800px] mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">
                        {testimonial.text}
                      </p>
                      <h1 className="text-xl font-bold text-black/80">
                        {testimonial.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
