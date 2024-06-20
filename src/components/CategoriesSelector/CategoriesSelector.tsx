import React from "react";
import Category from "../category/Category";
import { categoriesData } from "../../utils/data";

function CategoriesSelector() {
  return (
    <div className="flex flex-row items-start justify-between w-screen h-auto px-5 py-2 bg-slate-100">
      {categoriesData.map((category, i) => (
        <Category key={i} name={category} />
      ))}
    </div>
  );
}

export default CategoriesSelector;
