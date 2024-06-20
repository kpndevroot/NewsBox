import React from "react";

function Category({ name }) {
  return (
    <div className="w-auto h-auto px-4 py-2 text-center text-black bg-[#FFECEE] rounded-full ">
      <span>{name}</span>
    </div>
  );
}

export default Category;
