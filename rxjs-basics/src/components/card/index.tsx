import React, { useState } from "react";
import "./../../assets/styles.css";
import { CardProps } from "./Card.props";
import Tooltip from "../tooltip/Tooltip";

const Card = ({
  cardDetails,
  onAction,
  showMatrixIcon = true,
  popupContent,
}: CardProps) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div
      className="w-[280px] border-b-[1px] h-[96px] bg-[#FFFFFF] hover:bg-[#E5FFFC] active:bg-[#00B8A0]
            rounded-lg p-[12px] flex flex-col justify-between cursor-pointer
            text-[#3A3A3C] active:text-white group"
    >
      <div className="flex justify-between items-center">
        <div className="text-[14px] font-semibold">{cardDetails.heading}</div>
        {showMatrixIcon && (
          <Tooltip tooltipText={"Common metrix"} position={"top-right"}>
            <div
              className="icon icon-common-matrix text-lg flex items-center cursor-pointer hover:-translate-y-[0.5px]"
              onClick={() => {
                onAction(cardDetails.cardGuid);
                setShowPopup(true);
              }}
            />
          </Tooltip>
        )}
      </div>
      <div className="flex space-x-4 items-center">
        <div className="flex space-x-6">
          <div className="text-sm mt-1">
            <div className="text-[12px] ">{cardDetails.status}</div>
            <div className="text-[15px] font-semibold">
              {cardDetails.progress.completed}
              <span className="text-[12px]">/{cardDetails.progress.total}</span>
            </div>
          </div>
          <div className="w-[1px] h-[38px] mt-2 bg-[#D1D1D6]"></div>
        </div>
        <div className="flex items-center space-x-[6px]">
          <div className="block">
            <div className="flex items-center gap-3 text-[12px]">
              {cardDetails.stages.map((stage, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center font-normal"
                >
                  <div>{stage.label}</div>
                  <div
                    className="bg-[#E5FFFC] rounded-md border-2 border-[#CCFFF8]
          group-active:border-[#CEE9FD] group-active:bg-white group-hover:bg-white
          px-[6px] py-[1px] h-[18px] text-[12px] font-medium flex items-center
          text-[#3A3A3C] group-active:text-[#2C2C2E] hover:text-[#2C2C2E]"
                  >
                    {stage.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Tooltip
            tooltipText={
              <div className="px-2 text-left">
                <div>D:Draft</div>
                <div>W:Waiting for Review/approval</div>
                <div>R:Returned from Reviewer</div>
              </div>
            }
            children={
              <div className="flex flex-col items-center icon icon-help text-base cursor-pointer" />
            }
            position={"top-right"}
          />
        </div>
      </div>
      {showPopup && popupContent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg relative">
            {popupContent}
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setShowPopup(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
