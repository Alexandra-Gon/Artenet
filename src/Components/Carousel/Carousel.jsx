import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,

    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div className="Carousel">
      <Slider {...settings}>
        <div>
          <img src={require("../../images/banner1.jpg")} alt="Banner 1" />
        </div>
        <div>
          <img src={require("../../images/banner2.jpg")} alt="Imagen 2" />
        </div>
        <div>
          <img src={require("../../images/banner3.jpg")} alt="Imagen 3" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;