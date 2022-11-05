import React from "react";
import { Link } from "react-router-dom";
import Ucard from "./Ucard";
import "./Upcomming.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Upcomming = ({ items, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    cssEase: "linear",
  };
  return (
    <>
      <section className="upcome">
        <div className="containers">
          <div className="headings">
            <h1>{title}</h1>
            <Link to="/"> view all</Link>
          </div>

          <div className="cont">
            <Slider {...settings}>
              {items.map((itm) => (
                <Ucard item={itm} key={itm.id} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Upcomming;
