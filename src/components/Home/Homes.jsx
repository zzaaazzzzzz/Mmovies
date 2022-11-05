import React, { useState } from "react";
import { homeData } from "../../dammyData";
import Home from "./Home";
import "./homes.css";
const Homes = () => {
  const [items, setItem] = useState(homeData);
  return (
    <>
      <section className="home">
        <Home items={items} />
      </section>
    </>
  );
};

export default Homes;
