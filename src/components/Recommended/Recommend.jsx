import React, { useState } from "react";
import { Link } from "react-router-dom";
import { recommended } from "../../dammyData";
import Rec from "./Rec";
import Slider from "react-slick";

const Recommend = () => {
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
  const [rec, setrec] = useState(recommended);
  return (
    <>
      <div className="recommend">
        <div className="headings">
          <h1>Recommended Movies</h1>
          <Link to="/"> view all</Link>
        </div>
        <div className="cont">
          <Slider {...settings}>
            {rec.map((itm) => (
              <Rec item={itm} key={itm.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Recommend;
