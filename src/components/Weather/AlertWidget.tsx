import React from "react";
import { GoAlert } from "react-icons/go";
function AlertWidget() {
  return (
    <div className="flex items-center justify-center w-auto px-5 bg-white border-2 border-red-500">
      <div className="flex flex-col items-start justify-center w-2/3 left">
        <h5 className="text-gray-500">sender</h5>
        <p className="text-gray-800 ">
          messagemessage messagemessage messagemessage message message
        </p>
      </div>
      <div className="flex flex-col items-start justify-center right">
        <div className="w-auto bg-red-200 rounded-md iconCover">
          <GoAlert size={24} color="black" />
        </div>
      </div>
    </div>
  );
}

export default AlertWidget;
