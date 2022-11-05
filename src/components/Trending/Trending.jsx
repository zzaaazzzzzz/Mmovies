import React, { useState } from "react";
import { trending } from "../../dammyData";
import Trend from "./Trend";
import "./Trend.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SmpleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <BsArrowRightCircle />
      </button>
    </div>
  );
};
const SmplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prov">
        <BsArrowLeftCircle />
      </button>
    </div>
  );
};

const Trending = () => {
  const [items, setItem] = useState(trending);
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SmpleNextArrow />,
    provArrow: <SmplePrevArrow />,
  };
  return (
    <div className="trend">
      <Slider {...settings}>
        {items.map((itm) => (
          <Trend item={itm} key={itm.id} />
        ))}
      </Slider>
    </div>
  );
};

export default Trending;
