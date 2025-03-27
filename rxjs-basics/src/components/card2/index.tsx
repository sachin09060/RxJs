import React from "react";
import "./../../assets/styles.css";
import { CardProps } from "./Card.props";

const Card2 = ({ cardDetails }: CardProps) => {
  return (
    <div
      className={`w-[280px] h-[96px] border-b-[1px] p-[12px] flex flex-col justify-between cursor-pointer 
            text-[#3A3A3C] bg-white rounded-lg hover:bg-[#E5FFFC] active:bg-[#00B8A0] active:text-white group`}
    >
      <div className="flex justify-between items-center">
        <div className="text-[14px] font-semibold">{cardDetails.heading}</div>
      </div>

      <div className="flex justify-between items-center w-full">
        {cardDetails.items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div className="w-[1px] h-[38px] mt-2 bg-[#D1D1D6]" />
            )}
            <div className="text-center">
              {Object.entries(item).map(([key, value]) => (
                <div key={key} className="text-[12px] font-normal">
                  {key}
                  <div className="text-[15px] font-semibold">
                    {typeof value === "object" ? (
                      <>
                        {value.completed}
                        <span className="text-[12px]">/{value.total}</span>
                      </>
                    ) : (
                      value
                    )}
                  </div>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Card2;
