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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
