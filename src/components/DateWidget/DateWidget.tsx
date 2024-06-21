import React from "react";
import { useDateAndGreeting } from "../../hooks";

const DateWidget: React.FC = () => {
  const { dateString, greeting } = useDateAndGreeting();

  return (
    <div className="flex flex-col justify-center px-4 py-3 mx-auto transition duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg sm:w-64 md:w-72 lg:w-80 xl:w-96">
      <h4 className="mb-1 text-sm text-center text-gray-600">{dateString}</h4>
      <h2 className="text-lg font-semibold text-center text-gray-800">
        {greeting}!
      </h2>
    </div>
  );
};

export default DateWidget;
