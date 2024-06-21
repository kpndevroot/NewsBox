// src/components/DateSearchCard.tsx

import React from "react";
import useNewsStore from "../../store/newsStore";

interface DateSearchCardProps {}

const DateSearchCard: React.FC<DateSearchCardProps> = () => {
  const { filters, setFilters } = useNewsStore();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setFilters({ ...filters, date: newDate });
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="mb-2 text-lg font-semibold">Date Search</h2>
      <input
        type="date"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
        value={filters.date}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DateSearchCard;
