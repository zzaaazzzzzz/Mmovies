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
