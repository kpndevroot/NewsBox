import React from "react";

import { CloudIcon } from "@heroicons/react/24/outline";
function StatusWidget() {
  return (
    <div className="flex flex-row justify-center px-5 bg-white border-2 border-red-500">
      <div className="flex flex-col justify-center px-4 py-5 left">
        <p className="flex flex-col text-gray-500 now">now</p>
        <h1 className="text-2xl text-black temperature">71C</h1>
        <span className="text-xs text-gray-500 status">feels like happy</span>
      </div>
      <div className="flex flex-col items-center justify-center right ">
        <div className="w-auto bg-red-200 rounded-md iconCover">
          <CloudIcon className="w-6 h-6 text-black " />
        </div>
        <span className="text-gray-400">Cloudy</span>
      </div>
    </div>
  );
}

export default StatusWidget;
