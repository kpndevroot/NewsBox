import React from "react";
import { WiWindy, WiHumidity } from "react-icons/wi";
import { TbGauge } from "react-icons/tb";
function StatWidget() {
  return (
    <div className="flex flex-row justify-center px-5 bg-white border-2 border-red-500">
      <div className="flex flex-col justify-around px-4 py-5 ">
        <div className="flex flex-row justify-between gap-3 px-4 py-2 text-right wind">
          <h4 className="text-sm text-right text-black">5 kmph</h4>
          <div className="w-auto bg-red-200 rounded-md iconCover">
            <WiWindy size={24} />
          </div>
        </div>
        <div className="flex flex-row justify-between px-4 py-2 text-right humidity">
          <h4 className="text-sm text-right text-black">5 g.m-3</h4>
          <div className="w-auto bg-red-200 rounded-md iconCover">
            <WiHumidity size={24} />
          </div>
        </div>
        <div className="flex flex-row justify-between px-4 py-2 text-right pressure">
          <h4 className="text-sm text-right text-black">5 Pa</h4>
          <div className="w-auto bg-red-200 rounded-md iconCover">
            <TbGauge size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatWidget;
