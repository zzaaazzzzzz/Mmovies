import React from "react";
import HomeCard from "./HomeCard";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

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

const Home = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SmpleNextArrow />,
    provArrow: <SmplePrevArrow />,
  };
  return (
    <>
      <div className="homeContainer">
        <Slider {...settings}>
          {items.map((ite) => (
            <HomeCard item={ite} key={ite.id} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Home;
