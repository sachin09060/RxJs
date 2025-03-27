import React from "react";
import Navbar from "./Navbar";
import imagesrc from "../static/House.png";

const Home = () => {
  return (
    <div className="grid grid-flow-col grid-col-2 justify-left">
      <Navbar />
      <div className="text-center flex flex-row justify-center text-xl mt-2">
        <div className="w-1/2 place-content-center">
          <h1 className="text-center mt-2 font-serif text-5xl">
            Home page
          </h1>
          <img src={imagesrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
