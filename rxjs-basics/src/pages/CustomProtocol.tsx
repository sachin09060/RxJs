import React, { useState } from "react";
import TemplateCard from "../components/template";
import Header from "./Header";

const Newpage = () => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const handleCardSelect = (cardId: string) => {
    setSelectedCardId(cardId);
  };

  const templateInfo = [
    {
      cardId: "001",
      templateHeading: "Template Name 1",
      templateContent: [
        {
          title: "Item 1",
          subItems: [
            { title: "Sub-item 1", subItems: ["Sub-child 1", "Sub-child 2"] },
          ],
        },
        {
          title: "Item 2",
          subItems: [
            { title: "Sub-item 1", subItems: ["Sub-child 1", "Sub-child 2"] },
            { title: "Sub-item 2", subItems: ["Sub-child 1", "Sub-child 2"] },
            { title: "Sub-item 3", subItems: ["Sub-child 1", "Sub-child 2"] },
          ],
        },
      ],
    },
    {
      cardId: "002",
      templateHeading: "Template Name 2",
      templateContent: [
        {
          title: "Item 1",
          subItems: [{ title: "Sub-item 1" }],
        },
        {
          title: "Item 2",
          subItems: [{ title: "Sub-item 1" }, { title: "Sub-item 2" }],
        },
        {
          title: "Item 3",
          subItems: [{ title: "Sub-item 1" }],
        },
        {
          title: "Item 4",
          subItems: [{ title: "Sub-item 1" }, { title: "Sub-item 2" }],
        },
        {
          title: "Item 5",
          subItems: [{ title: "Sub-item 1" }],
        },
      ],
    },
    {
      cardId: "003",
      templateHeading: "Template Name 3",
      templateContent: [
        { title: "Item 1" },
        { title: "Item 2" },
        { title: "Item 3" },
        { title: "Item 4" },
        { title: "Item 5" },
        { title: "Item 6" },
        { title: "Item 7" },
        { title: "Item 8" },
        { title: "Item 9" },
        { title: "Item 10" },
      ],
    },
    {
      cardId: "004",
    },
  ];

  return (
    <div>
      <Header />
      <div className="w-[90%] m-10 flex space-x-4">
        {templateInfo.map(({ cardId, templateHeading, templateContent }) => (
          <TemplateCard
            key={cardId}
            cardId={cardId}
            isSelected={selectedCardId === cardId}
            templateHeading={templateHeading}
            templateContent={templateContent}
            onSelect={handleCardSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Newpage;
