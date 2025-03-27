import React, { useState } from "react";
import Header from "./Header";
import Button from "../components/button";
import Search from "../components/search";
import Select from "../components/select";
import Checkbox from "../components/checkbox";
import RadioButton from "../components/radio-button";
import Card3 from "../components/card3";
import DatePicker from "../components/DatePicker";

const Newpage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [radioChecked, setRadioChecked] = useState("radio1");
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState<any>([
    { id: "1", name: "Option 1" },
    { id: "2", name: "Option 2" },
    { id: "3", name: "Option 3" },
    { id: "4", name: "Option 4" },
  ]);
  const [currentOption, setCurrentOption] = useState("");

  const [pageDataError, setPageDataError] = useState({
    checkBoxError: false,
    radioButtonError: false,
    selectFilterError: false,
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setCurrentOption(selectedValue);
    setPageDataError((prev) => ({
      ...prev,
      selectFilterError:
        !selectedValue || selectedValue === "Please Select valid options",
    }));
  };

  const handleCheckbox1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    console.log(e.target.checked);
  };

  const handleRadioChange = (radioId: string) => {
    setRadioChecked(radioId);
  };

  const handleSearch = () => {
    alert(`Your searched text is: "${search}"`);
  };

  const validateJson = () => {
    let hasError = false;

    const newPageDataError = {
      checkBoxError: !isChecked,
      radioButtonError: radioChecked !== "radio2" && radioChecked.trim() === "",
      selectFilterError:
        !currentOption || currentOption === "Please Select valid options",
    };

    setPageDataError(newPageDataError);

    hasError = Object.values(newPageDataError).some((error) => error);
    return hasError;
  };

  const primaryCardInfo = {
    cardGuid: "12345",
    heading: "Macroeconomics",
    progressLabel: "Completed",
    completed: 50,
    total: 100,
    stages: [
      { stageLabel: "D", stageCount: 2 },
      { stageLabel: "W", stageCount: 5 },
      { stageLabel: "R", stageCount: 8 },
    ],
  };

  const secondaryCardInfo = {
    cardGuid: "67890",
    heading: "Financial Accounting",
    Blueprint: 3,
    Finalized: 7,
    progressLabel: "QB Status",
    completed: 50,
    total: 100,
  };

  return (
    <div className="w-[100%]">
      <Header />
      <div className="w-[90%] m-10 flex justify-between">
        <div className="w-[60%] flex flex-col space-y-6">
          <div>
            <div className="text-[24px] font-bold mb-3">
              Button Components for SVKM
            </div>
            <div className="flex space-x-8">
              <Button
                label="Primary"
                variant="primary"
                onClick={() => alert("You are clicking 'Primary Button'.")}
              />
              <Button
                label="Secondary"
                variant="secondary"
                onClick={() => alert("You are clicking 'Secondary Button'.")}
              />
              <Button
                label="Tertiary"
                variant="tertiary"
                onClick={() => alert("You are clicking 'Tertiary Button'.")}
              />
              <Button label="Disabled" disabled={true} onClick={() => {}} />
            </div>
          </div>

          <div>
            <div className="text-[24px] font-bold my-3">
              Filter Component for SVKM
            </div>
            <div className="w-[60%]">
              <Search
                handleFilterSearch={handleSearch}
                filterValue={search}
                onFilterChange={(e) => setSearch(e)}
                onFilterClear={() => setSearch("")}
              />
            </div>
          </div>

          <div>
            <div className="text-[24px] font-bold my-3">
              Select Component for SVKM
            </div>
            <div className="w-[60%] h-10">
              <Select
                value={currentOption as string}
                options={selectedOption}
                onSelectChange={handleSelectChange}
                {...(pageDataError.selectFilterError
                  ? {
                      error: "This is error message for Select dropdown",
                    }
                  : null)}
              />
            </div>
          </div>

          <div>
            <div className="text-[24px] font-bold my-3">
              Checkbox Component for SVKM
            </div>
            <div className="w-1/2 h-10">
              <Checkbox
                id="checkbox"
                label={
                  isChecked
                    ? "Primary Checkbox Checked"
                    : "Primary Checkbox Unchecked"
                }
                checked={isChecked}
                onChange={handleCheckbox1Change}
              />
            </div>
            <div className="w-1/2 h-10">
              <Checkbox
                label={
                  isChecked
                    ? "Secondary Checkbox Checked"
                    : "Secondary Checkbox Unchecked"
                }
                checked={isChecked}
                onChange={handleCheckbox1Change}
                variant="secondary"
              />
            </div>
          </div>
        </div>

        <div className="relative w-[40%]">
          <div className="flex w-full mb-4">
            <DatePicker />
          </div>
          <div>
            <div className="text-[24px] font-bold my-3">
              Radio Button Component for SVKM
            </div>
            <div>
              <div className="h-10">
                <RadioButton
                  id="radio1"
                  name="radioGroup"
                  checked={radioChecked === "radio1"}
                  label={
                    radioChecked === "radio1"
                      ? "Radio Button Checked"
                      : "Radio Button Unchecked"
                  }
                  onChange={() => handleRadioChange("radio1")}
                  {...(pageDataError.radioButtonError
                    ? {
                        errors: "This is error message for radio-button",
                      }
                    : null)}
                />
                <div className=" h-10">
                  <RadioButton
                    id="radio2"
                    name="radioGroup"
                    checked={radioChecked === "radio2"}
                    label={
                      radioChecked === "radio2"
                        ? "Radio Button Checked"
                        : "Radio Button Unchecked"
                    }
                    onChange={() => handleRadioChange("radio2")}
                    {...(pageDataError.radioButtonError
                      ? {
                          errors: "This is error message for radio-button",
                        }
                      : null)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-[24px] font-bold mt-8 mb-3">
              Card Component for SVKM
            </div>

            <div className="mt-2">
              <Card3
                info={primaryCardInfo}
                onClick={() => {}}
                variant={"primary"}
                showMatrixIcon={true}
                matrixIconPopupContent={
                  <div className="p-4 max-w-[600px]">
                    <h2 className="text-lg font-semibold">Popup Title</h2>
                    <p>This is the popup content.</p>
                    <p>
                      What is Lorem Ipsum? Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                    </p>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                      Confirm
                    </button>
                  </div>
                }
                showStagesInfo={
                  <div className="px-2 text-left text-sm">
                    <div>D: Draft</div>
                    <div>W: Waiting for Review/Approval</div>
                    <div>R: Returned from Reviewer</div>
                  </div>
                }
              />
            </div>
            <div className="mt-2">
              <Card3
                info={secondaryCardInfo}
                onClick={() => {}}
                variant={"secondary"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center space-x-4">
        <Button label="Validation" variant="primary" onClick={validateJson} />
        <Button
          label="Clear all"
          variant="secondary"
          onClick={() =>
            setPageDataError((prev) => ({
              ...prev,
              selectFilterError: false,
            }))
          }
        />
      </div>
    </div>
  );
};

export default Newpage;
