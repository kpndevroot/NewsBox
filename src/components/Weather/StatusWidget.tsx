import React from "react";
import { CloudIcon } from "@heroicons/react/24/outline";

type StatusWidgetProps = {
  temperature?: number;
  status?: number;
  description?: string;
};

const StatusWidget: React.FC<StatusWidgetProps> = ({
  temperature,
  status,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center px-3 py-3 mx-auto transition duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg sm:w-72 md:w-80 lg:w-90 xl:w-80">
      <div className="flex flex-col justify-around w-full max-w-xs sm:flex-row sm:max-w-sm">
        {/* Left Section */}
        <div className="flex flex-col justify-center py-3 sm:py-5">
          <p className="mb-1 text-sm text-gray-500">now</p>
          <h1 className="mb-2 text-2xl font-semibold text-black">
            {temperature}°C
          </h1>
          <span className="text-xs text-gray-500">feels like {status}°C</span>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center py-5 sm:justify-end sm:py-5">
          <div className="flex items-center justify-center w-12 h-10 bg-blue-100 rounded-full">
            <CloudIcon className="w-8 h-8 text-blue-500" />
          </div>
          <span className="mt-2 ml-2 text-gray-500 mtext-sm">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatusWidget;
