import React from "react";
import SushiCategoryContainer from "./SushiCategoryContainer";

const SushiByCategory = () => {
  const numberOfContainers = 16;

  return (
    <div className="flex flex-wrap w-[864px] justify-center items-center mx-auto mt-small">
      {/* Generate and map over the array of indices */}
      {Array.from({ length: numberOfContainers }, (index) => (
        <SushiCategoryContainer key={index} />
      ))}
    </div>
  );
};

export default SushiByCategory;
