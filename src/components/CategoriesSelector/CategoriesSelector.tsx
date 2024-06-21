import React from "react";
import Category from "../category/Category";
import { categoriesData } from "../../utils/data";
import useNewsStore from "../../store/newsStore";
import useFetchNews from "../../hooks/useFetchNews";

const CategoriesSelector: React.FC = () => {
  const { filters, setFilters } = useNewsStore();
  const { resetFilters } = useFetchNews();

  const handleCategoryClick = (category) => {
    if (filters.category === category) {
      setFilters({ ...filters, category: "all" }); // Toggle to "all" if already selected
    } else {
      setFilters({ ...filters, category });
    }
  };

  return (
    <div className="flex flex-row items-start justify-between w-full max-w-screen-xl px-5 py-3 mx-auto bg-white rounded-lg backdrop-blur-lg">
      <Category key="all" name="All" onClick={() => resetFilters()} />
      {categoriesData.map((category, i) => (
        <Category
          key={i}
          name={category}
          onClick={() => handleCategoryClick(category)}
        />
      ))}
    </div>
  );
};

export default CategoriesSelector;
