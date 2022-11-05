import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { VscPlayCircle } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "./Trend.css";
import "../Home/home.css";

const Trend = ({
  item: { id, cover, name, rating, time, desc, starring, genres, tags, video },
}) => {
  return (
    <div className="trendingCard">
      <div className="cover">
        <img src={cover} alt=".." />
      </div>
      <div className="content">
        <div className="details flex">
          <h1>{name}</h1>
          <div className="rating flex">
            <FaStar
              style={{
                color: "#e50813",
                margin: "0px 3px",
                fontSize: "20px",
              }}
            />
            <FaStar
              style={{
                color: "#e50813",
                margin: "0px 3px",
                fontSize: "20px",
              }}
            />
            <FaStar
              style={{
                color: "#e50813",
                margin: "0px 3px",
                fontSize: "20px",
              }}
            />
            <FaStar
              style={{
                color: "#e50813",
                margin: "0px 3px",
                fontSize: "20px",
              }}
            />
            <BsStarHalf
              style={{
                color: "#e50813",
                margin: "0px 3px",
                fontSize: "20px",
              }}
            />
            <label>{rating} (imdp)</label>
            <span>GP</span>
            <label>{time}</label>
          </div>
          <p>{desc}</p>
          <div className="cast">
            <h4>
              <span>Starring :</span>
              {starring}
            </h4>
            <h4>
              <span>Genres :</span>
              {genres}
            </h4>
            <h4>
              <span>Tags :</span>
              {tags}
            </h4>
            <button style={{ margin: "20px" }}>Play Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trend;
