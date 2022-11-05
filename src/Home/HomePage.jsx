import React, { useState } from "react";
import Footer from "../components/Footer";
import Homes from "../components/Home/Homes";
import Lastest from "../components/Lastest/Lastest";
import Recommend from "../components/Recommended/Recommend";
import Trending from "../components/Trending/Trending";
import Upcomming from "../components/Upcomming/Upcomming";
import { latest, upcome } from "../dammyData";

const HomePage = () => {
  const [items, setItem] = useState(upcome);
  const [laster, setLaster] = useState(latest);
  return (
    <>
      <Homes />
      <Upcomming items={items} title="Upcomming Movies" />
      <Lastest laster={laster} title="Latest Movise" />
      <Trending />
      <Recommend />
      <Footer />
    </>
  );
};

export default HomePage;
