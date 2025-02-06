import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const videoIDs = ["_ZLKf5zLTa4", "Y9yufrdKBGc", "9-rF18vYQl0"];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[full] px-6 max-w-5xl mx-auto mt-10">
      <Slider {...settings}>
        {videoIDs.map((id, index) => (
          <div key={index} className="flex justify-center">
            <iframe
              className="w-full h-64 md:h-96 lg:h-[500px]"
              src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&autoplay=0`}
              title={`Video ${index + 1}`}
              frameBorder="0"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-presentation"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
