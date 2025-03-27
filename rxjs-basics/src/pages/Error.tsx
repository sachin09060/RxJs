import React from "react";
import Header from "./Header";

const Error = () => {
  return (
    <>
      <Header />
      <div className="flex flex-wrap flex-col w-full h-svh items-center justify-center">
        <div className="font-black text-gray-700 md:text-[250px] text-[150px]">
          <h1>404</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center h-[25px] text-sm sm:text-base bg-white font-bold absolute mt-10 w-svw ">
            <p>Oops! The page you requested could not be found!</p>
        </div>
        <div className="font-bold text-[30px] h-min absolute mt-72 text-red-700">
            <h1>ERROR!</h1>
        </div>
      </div>
    </>
  );
};

export default Error;