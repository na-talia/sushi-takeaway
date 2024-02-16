import React from "react";

const SushiCategoryContainer = () => {
  return (
    <div
      className="border-[1px] w-[196px] h-[204px] m-2.5 border-mainLight rounded-sm text-mainLight 
    font-montserrat font-medium hover:border-white hover:text-white"
    >
      <div className="overflow-hidden">
        <img
          src={process.env.PUBLIC_URL + "/photo1702073570.jpeg"}
          alt="cold food"
          className="w-[196px] h-[152px] hover:scale-125 "
        />
      </div>
      <span
        className="flex text-base leading-5 py-[15px] justify-center bg-black	bg-opacity-50

"
      >
        Kolde Forretter
      </span>
    </div>
  );
};

export default SushiCategoryContainer;
