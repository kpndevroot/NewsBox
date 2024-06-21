// src/components/category/Category.tsx
import React from "react";

interface CategoryProps {
  name: string;
  onClick: () => void; // Define onClick handler prop
}

const Category: React.FC<CategoryProps> = ({ name, onClick }) => {
  return (
    <div
      className="w-auto h-auto px-4 py-2 text-center text-black bg-blue-100 rounded-full cursor-pointer"
      onClick={onClick} // Attach onClick handler to div
    >
      <span>{name}</span>
    </div>
  );
};

export default Category;
