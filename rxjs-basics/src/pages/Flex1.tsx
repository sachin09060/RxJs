import React from "react";
import Header from "./Header";

const Flex1 = () => {
  return (
    <>
    <Header/>    
    <div className="text-center flex flex-row h-svh m-5 flex-wrap gap-5">
      <div className="bg-[#FD9B63] w-dvw flex items-center justify-center">
        <p>A</p>
      </div>
      <div className="bg-[#FD9B63] w-[70%] flex items-center justify-center">
        <p>B</p>
      </div>
      <div className="bg-[#FD9B63] w-[28.58%] flex items-center justify-center">
        <p>C</p>
      </div>
      <div className="bg-[#FD9B63] w-[28.58%] flex items-center justify-center">
        <p>D</p>
      </div>
      <div className="bg-[#FD9B63] w-[70%] flex items-center justify-center">
        <p>E</p>
      </div>
    </div>
    </>
  );
};

export default Flex1;
