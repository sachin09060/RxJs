import React, { useState } from "react";
import "./../../assets/styles.css";
import { CardProps } from "./Card.props";
import Tooltip from "../tooltip/Tooltip";
import Popup from "../popup";

const Card3: React.FC<CardProps> = (props) => {
  const { onClick, variant } = props;
  const [showPopup, setShowPopup] = useState(false);

  if (variant === "primary") {
    const {
      info,
      showMatrixIcon = true,
      matrixIconPopupContent,
      showStagesInfo,
    } = props;
    return (
      <div
        className="w-[280px] border-b-[1px] h-[96px] bg-[#FFFFFF] hover:bg-[#E5FFFC] active:bg-[#00B8A0]
              rounded-lg p-[12px] flex flex-col justify-between cursor-pointer
              text-[#3A3A3C] active:text-white group"
      >
        <div className="flex justify-between items-center">
          <div className="text-[14px] font-semibold">{info.heading}</div>
          {showMatrixIcon && (
            <Tooltip tooltipText={"Common metrics"} position={"top-right"}>
              <div
                className="icon icon-common-matrix text-lg flex items-center cursor-pointer hover:-translate-y-[0.5px]"
                onClick={() => {
                  onClick(info.cardGuid);
                  setShowPopup(true);
                }}
              />
            </Tooltip>
          )}
        </div>

        <div className="flex space-x-4 items-center">
          {info.progressLabel && (
            <div className="text-sm mt-1">
              <div className="text-[12px]">{info.progressLabel}</div>
              <div className="text-[15px] font-semibold">
                {info.completed ?? 0}
                <span className="text-[12px]">/{info.total ?? 0}</span>
              </div>
            </div>
          )}

          <div className="w-[1px] h-[38px] mt-2 bg-[#D1D1D6]"></div>

          {info.stages && (
            <div className="flex gap-2">
              {info.stages.map((stage, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center font-normal"
                >
                  <div className="text-[12px]">{stage.stageLabel}</div>
                  <div
                    className="bg-[#E5FFFC] rounded-md border-2 border-[#CCFFF8]
            group-active:border-[#CEE9FD] group-active:bg-white group-hover:bg-white
            px-[10px] py-[1px] h-[18px] text-[12px] font-medium flex items-center
            text-[#3A3A3C] group-active:text-[#2C2C2E] hover:text-[#2C2C2E]"
                  >
                    {stage.stageCount ?? 0}
                  </div>
                </div>
              ))}
            </div>
          )}

          <Tooltip tooltipText={showStagesInfo} position={"top-right"}>
            <div className="flex flex-col items-center icon icon-help text-base cursor-pointer" />
          </Tooltip>
        </div>

        {showPopup && matrixIconPopupContent && (
          <Popup
            size="large"
            position="center"
            onClose={() => setShowPopup(false)}
          >
            {matrixIconPopupContent}
          </Popup>
        )}
      </div>
    );
  } else if (variant === "secondary") {
    const { info } = props;
    return (
      <div
        className={`w-[280px] h-[96px] border-b-[1px] p-[12px] flex flex-col justify-between cursor-pointer 
              text-[#3A3A3C] bg-white rounded-lg hover:bg-[#E5FFFC] active:bg-[#00B8A0] active:text-white group`}
      >
        <div className="flex justify-between items-center">
          <div className="text-[14px] font-semibold">{info.heading}</div>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="text-center flex justify-between w-full">
            <div>
              <div className="text-[12px] font-normal">Blueprint</div>
              <div className="text-[15px] font-semibold">
                {info.Blueprint ?? "N/A"}
              </div>
            </div>

            <div className="w-[1px] h-[38px] mt-2 bg-[#D1D1D6]" />

            <div>
              <div className="text-[12px] font-normal">Finalized</div>
              <div className="text-[15px] font-semibold">
                {info.Finalized ?? "N/A"}
              </div>
            </div>

            <div className="w-[1px] h-[38px] mt-2 bg-[#D1D1D6]" />
            {info.progressLabel && (
              <div>
                <div className="text-[12px] font-normal">
                  {info.progressLabel}
                </div>
                <div className="text-[15px] font-semibold">
                  {info.completed ?? 0}/{info.total ?? 0}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Card3;
