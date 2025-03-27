import React from "react";
import Header from "./Header";

const GridAndFlex = () => {
  return (
    <>
    <Header/>
    <div className="h-[96.5vh] w-dvw grid grid-rows-7 grid-cols-3 gap-1 p-1 text-white text-3xl">
      <div className="bg-[#789b68] col-span-3 grid justify-center items-center">
        <p>Header</p>
      </div>
      <div className="bg-[#55AD9B] row-start-2 row-end-7 grid justify-center items-center">
        <p>ASide</p>
      </div>
      <div className="bg-[#ee4e4eae] col-span-2 row-start-2 row-end-7 grid justify-center items-center">
        <div className="grid justify-center items-end">
          <p>Article</p>
        </div>
        <div className="flex flexShrink space-x-10 text-center text-stone-950 items-end">
          <div className="bg-[#F1F1F1] w-56 h-56 flex justify-center items-center">Image</div>
          <div className="bg-[#F1F1F1] w-56 h-56 flex justify-center items-center">Image</div>
          <div className="bg-[#F1F1F1] w-56 h-56 flex justify-center items-center">Image</div>  
        </div>
      </div>
      <div className="bg-[#789b68] col-span-3 grid justify-center items-center">
        <p>Footer</p>
      </div>
    </div>
    </>
  );
};

export default GridAndFlex;
