import React from "react";
import Header from "./Header";

const Grid1 = () => {
  return (
    <>
    <Header/>
    <div className="grid grid-rows-3 grid-cols-5 gap-2 justify-center align-middle h-dvh p-2">
        <div className="bg-[#6EACDA] col-span-5"></div>
        <div className="bg-[#EF5A6F]"></div>
        <div className="bg-[#73BBA3] col-span-3"></div>
        <div className="bg-[#EF5A6F]"></div> 
        <div className="bg-[#FF8225] col-span-5"></div> 
    </div>
    </>
  );
};

export default Grid1;
