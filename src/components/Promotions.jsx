import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Promotions.css";

const Promotions = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "25%",
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img
            src={process.env.PUBLIC_URL + "/photo1702073570.jpeg"}
            alt="1"
            className="object-cover"
          />
        </div>
        <div className="carousel-slide">
          <img
            src={process.env.PUBLIC_URL + "/photo1702075146.jpeg"}
            alt="2"
            className="object-cover"
          />
        </div>
        <div className="carousel-slide">
          <img
            src={process.env.PUBLIC_URL + "/photo1702075161.jpeg"}
            alt="3"
            className="object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Promotions;
