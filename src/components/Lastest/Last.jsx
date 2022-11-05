import React from "react";
import "../Upcomming/Upcomming.css";
const Last = ({ lastt: { id, cover, name, time } }) => {
  return (
    <>
      <div className="MoviesBox">
        <div className="Image">
          <img src={cover} alt="a" />
        </div>
        <div className="dait">
          <h3>{name}</h3>
          <p>{time}</p>
          <button>PLAY NOW</button>
        </div>
      </div>
    </>
  );
};

export default Last;
