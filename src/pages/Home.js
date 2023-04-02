import React from "react";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import HouseList from "../components/HouseList";

const home = () => {
  return (
    <div id="home">
      <Hero />
      <HouseList />
    </div>
  );
};

export default home;
