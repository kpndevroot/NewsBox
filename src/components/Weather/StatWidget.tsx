import React from "react";
import { WiWindy, WiHumidity } from "react-icons/wi";
import { TbGauge } from "react-icons/tb";

interface StatWidgetProps {
  wind?: number;
  humidity?: number;
  pressure?: number;
}

const StatWidget: React.FC<StatWidgetProps> = ({
  wind,
  humidity,
  pressure,
}) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-3 mx-auto transition duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg sm:w-72 md:w-80 lg:w-96 xl:w-108">
      <div className="flex flex-col justify-around w-full max-w-xs sm:max-w-sm">
        {/* Wind */}
        <div className="flex items-center justify-between px-4 py-2 mb-2 text-sm text-right text-gray-700 bg-gray-100 rounded-md">
          <div className="mr-2 text-red-500">
            <WiWindy size={24} />
          </div>
          <div>{wind} kmph</div>
        </div>

        {/* Humidity */}
        <div className="flex items-center justify-between px-4 py-2 mb-2 text-sm text-right text-gray-700 bg-gray-100 rounded-md">
          <div className="mr-2 text-red-500">
            <WiHumidity size={24} />
          </div>
          <div>{humidity} g.m-3</div>
        </div>

        {/* Pressure */}
        <div className="flex items-center justify-between px-4 py-2 text-sm text-right text-gray-700 bg-gray-100 rounded-md">
          <div className="mr-2 text-red-500">
            <TbGauge size={24} />
          </div>
          <div>{pressure} Pa</div>
        </div>
      </div>
    </div>
  );
};

export default StatWidget;
