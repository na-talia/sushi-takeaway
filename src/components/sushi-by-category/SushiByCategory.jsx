import React from "react";
import SushiCategoryContainer from "./SushiCategoryContainer";

const SushiByCategory = () => {
  return (
    <div className="flex flex-wrap w-[818px] justify-center items-center mx-auto mt-small">
      <SushiCategoryContainer />; <SushiCategoryContainer />;
      <SushiCategoryContainer />; <SushiCategoryContainer />;
      <SushiCategoryContainer />; <SushiCategoryContainer />;
      <SushiCategoryContainer />; <SushiCategoryContainer />;
      <SushiCategoryContainer />; <SushiCategoryContainer />;
      <SushiCategoryContainer />; <SushiCategoryContainer />;
      <SushiCategoryContainer />; <SushiCategoryContainer />;
      <SushiCategoryContainer />; <SushiCategoryContainer />;
    </div>
  );
};

export default SushiByCategory;
