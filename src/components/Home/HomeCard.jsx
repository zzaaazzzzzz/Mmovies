import React from "react";
import { BsPlayCircle, BsStar, BsStarHalf } from "react-icons/bs";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { VscPlayCircle } from "react-icons/vsc";
import "./home.css";
import { Link } from "react-router-dom";

const HomeCard = ({
  item: { id, cover, name, rating, time, desc, starring, genres, tags, video },
}) => {
  return (
    <>
      <div className="box">
        <div className="coverimage">
          <img src={cover} alt=".." width="100%" />
        </div>
        <div className="content flex">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
