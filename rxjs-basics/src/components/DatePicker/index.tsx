import React, { useState, useRef, useEffect } from "react";
import dayjs from "dayjs";

const months = Array.from({ length: 12 }, (_, i) =>
  dayjs().month(i).format("MMMM")
);
const years = Array.from({ length: 20 }, (_, i) => dayjs().year() - 10 + i);

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
  const [previousDate, setPreviousDate] = useState<string>(
    dayjs().format("YYYY-MM-DD")
  ); // Show previous date initially
  const [isOpen, setIsOpen] = useState(false);
  const [focusedDate, setFocusedDate] = useState(dayjs());
  const ref = useRef<HTMLDivElement>(null);

  // Handle outside click to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectDate = (date: dayjs.Dayjs) => {
    setSelectedDate(date);
    setPreviousDate(date.format("YYYY-MM-DD"));
    setIsOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) return;
    if (event.key === "ArrowLeft")
      setFocusedDate(focusedDate.subtract(1, "day"));
    if (event.key === "ArrowRight") setFocusedDate(focusedDate.add(1, "day"));
    if (event.key === "ArrowUp") setFocusedDate(focusedDate.subtract(7, "day"));
    if (event.key === "ArrowDown") setFocusedDate(focusedDate.add(7, "day"));
    if (event.key === "Enter") selectDate(focusedDate);
    if (event.key === "Escape") setIsOpen(false);
  };

  return (
    <div className="relative w-64" ref={ref}>
      <label className="block text-sm font-medium text-gray-700">
        Select Date
      </label>
      <div className="relative">
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          value={
            selectedDate ? selectedDate.format("YYYY-MM-DD") : previousDate
          }
          readOnly
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="absolute inset-y-0 right-0 px-2 flex items-center text-gray-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          📅
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg p-4">
          <div className="flex justify-between mb-2">
            <select
              className="px-2 py-1 border rounded-md"
              value={selectedDate ? selectedDate.month() : focusedDate.month()}
              onChange={(e) =>
                setSelectedDate((prev) =>
                  (prev || dayjs()).month(parseInt(e.target.value))
                )
              }
            >
              {months.map((month, index) => (
                <option key={month} value={index}>
                  {month}
                </option>
              ))}
            </select>
            <select
              className="px-2 py-1 border rounded-md"
              value={selectedDate ? selectedDate.year() : focusedDate.year()}
              onChange={(e) =>
                setSelectedDate((prev) =>
                  (prev || dayjs()).year(parseInt(e.target.value))
                )
              }
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from(
              { length: (selectedDate || focusedDate).daysInMonth() },
              (_, i) => {
                const date = (selectedDate || focusedDate).date(i + 1);
                return (
                  <button
                    key={i}
                    className={`p-2 rounded-md ${
                      selectedDate && date.isSame(selectedDate, "day")
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100"
                    } hover:bg-blue-200 focus:ring-2 focus:ring-blue-500`}
                    onClick={() => selectDate(date)}
                    onKeyDown={handleKeyDown}
                  >
                    {i + 1}
                  </button>
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
