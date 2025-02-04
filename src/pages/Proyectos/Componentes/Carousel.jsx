import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const Carousel = ({ imagenes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" w-full px-6  mx-auto  h-[322px] lg:h-[500px] carrousel-detail">
      <Slider {...settings}>
        {imagenes.map((image, index) => (
          <div key={index} className="flex justify-center bg-white">
            <img
              src={image}
              className=" h-[322px] lg:h-[500px] object-cover w-full"
              alt={`Imagen ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carousel;
