import React, { useState } from "react";
import Title from "../Title";
import MockReviews from "./MockReviews";

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
    <div className="text-white flex justify-center">
      <div>
        <Title text="ANMELDELSER FRA VORES KUNDE" />
        <div className="flex overflow-x-auto mt-small">
          {visibleReviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevClick}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Previous
          </button>
          <button
            onClick={handleNextClick}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
