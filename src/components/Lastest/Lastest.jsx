import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Last from "./Last";
import "../Upcomming/Upcomming.css";

const Lastest = ({ laster, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
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
              {laster.map((itm) => (
                <Last lastt={itm} key={itm.id} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lastest;
