import React from "react";

const PopularProducts = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Big Image */}
      <div className="col-span-2 row-span-2">
        <img
          src={process.env.PUBLIC_URL + "/photo1702073570.jpeg"}
          alt="Big"
          className="w-full h-auto"
        />
      </div>
      {/* Small Images */}
      <div className="col-span-1">
        <img
          src={process.env.PUBLIC_URL + "/photo1702073570.jpeg"}
          alt="Small 1"
          className="w-full h-auto"
        />
      </div>
      <div className="col-span-1">
        <img
          src={process.env.PUBLIC_URL + "/photo1702073570.jpeg"}
          alt="Small 2"
          className="w-full h-auto"
        />
      </div>
      {/* Medium Image */}
      <div className="col-span-2 row-span-1 overflow-hidden">
        <img
          src={process.env.PUBLIC_URL + "/photo1702073570.jpeg"}
          alt="Medium"
          className="w-full h-auto"
          style={{ maxHeight: "48%" }}
        />
      </div>
    </div>
  );
};

export default PopularProducts;
