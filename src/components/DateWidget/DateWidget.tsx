import React from "react";
import { useDateAndGreeting } from "../../../hooks";

const DateWidget: React.FC = () => {
  const { dateString, greeting } = useDateAndGreeting();

  return (
    <div className="flex flex-col items-start w-auto px-4 py-5 border-2 border-red-500 main bg-slate-50">
      <h4 className="font-serif text-center text-gray-500 date">
        {dateString}
      </h4>
      <h2 className="font-bold text-center text-black wishText">{greeting}!</h2>
    </div>
  );
};

export default DateWidget;
