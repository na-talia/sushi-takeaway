import React, { useState } from "react";
import Title from "../Title";
import MockReviews from "./MockReviews";
import { CustomPrevArrow, CustomNextArrow } from "../UI/CustomArrows.jsx";

function Review({ review }) {
  return (
    <div className="max-w-sm mx-4">
      <ul className="border border-gray-300 rounded p-4">
        <li>
          <div>{review.id}</div>
          <div>{review.rating}</div>
          <p>{review.text}</p>
          <p>{review.icon}</p>
          <span>{review.name}</span>
          <span>{review.time}</span>
          <div>{review.google}</div>
        </li>
      </ul>
    </div>
  );
}

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 4;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? MockReviews.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === MockReviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleReviews = Array.from({ length: reviewsPerPage }).map(
    (_, index) => {
      const reviewIndex = (currentIndex + index) % MockReviews.length;
      return MockReviews[reviewIndex];
    }
  );

  return (
    <div className="text-white flex justify-center relative">
      <div>
        <Title text="ANMELDELSER FRA VORES KUNDE" />
        <div className="flex overflow-x-auto mt-small">
          {visibleReviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "70%",
          transform: "translateY(-50%)",
        }}
      >
        <CustomPrevArrow onClick={handlePrevClick} />
        <CustomNextArrow onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default Reviews;
