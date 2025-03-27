import React from "react";
import "./../../assets/styles.css";
import Checkbox from "../checkbox";
import { TemplateProps } from "./template.props";

const TemplateCard = ({
  cardId,
  templateHeading,
  templateContent,
  isSelected,
  onSelect,
}: TemplateProps) => {
  const handleCheckboxChange = () => {
    onSelect(cardId);
  };

  const getAlphabet = (index: number) => String.fromCharCode(97 + index);
  const getRoman = (num: number): string => {
    const romanMap = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];
    let result = "";
    for (const [roman, value] of romanMap) {
      while (num >= (value as number)) {
        result += roman;
        num -= value as number;
      }
    }
    return result;
  };

  return (
    <div
      className={`rounded-lg w-[297px] h-[408px] bg-white border-[2px] hover:border-[#66FFEB] ${
        isSelected ? "border-[#66FFEB]" : ""
      }`}
    >
      {templateContent ? (
        <>
          <div className="bg-[#E5FFFC] rounded-t-lg p-4 flex items-center justify-between h-[64px]">
            <div className="flex items-center space-x-2">
              <div className="flex justify-center items-center bg-white h-[40px] w-[40px] rounded-full border-8 border-[#CCFFF8]">
                <div className="icon icon-layers" />
              </div>
              <h2 className="text-[#00B8A0] font-semibold">
                {templateHeading}
              </h2>
            </div>
            <div className="text-[#00B8A0]">
              <Checkbox
                id={`checkbox-${cardId}`}
                label=""
                checked={isSelected}
                onChange={handleCheckboxChange}
                variant="secondary"
              />
            </div>
          </div>

          <div className="my-4 ml-6 text-[#475467] text-sm">
            {templateContent.map((item, index) => (
              <div key={`${cardId}-${index}`} className="mb-2">
                <p>
                  {index + 1}. {item.title}
                </p>

                {item.subItems && (
                  <ul className="ml-4 list-none">
                    {item.subItems.map((subItem, subIndex) => (
                      <li
                        key={`${cardId}-${index}-sub-${subIndex}`}
                        className="ml-2"
                      >
                        <span>
                          {getAlphabet(subIndex)}.{" "}
                          {typeof subItem === "string"
                            ? subItem
                            : subItem.title}
                        </span>

                        {typeof subItem !== "string" && subItem.subItems && (
                          <ul className="ml-6 list-none">
                            {subItem.subItems.map((subSubItem, subSubIndex) => (
                              <li
                                key={`${cardId}-${index}-sub-${subIndex}-sub-${subSubIndex}`}
                                className="ml-2"
                              >
                                <span>
                                  {getRoman(subSubIndex + 1)}.{" "}
                                  {typeof subSubItem === "string"
                                    ? subSubItem
                                    : subSubItem.title}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full cursor-pointer hover:border-[#66FFEB] transition-all">
          <div className="icon icon-plus text-[#00B8A0] text-8xl font-bold" />
          <p className="text-[#00B8A0] text-lg mt-2">New Template</p>
        </div>
      )}
    </div>
  );
};

export default TemplateCard;
