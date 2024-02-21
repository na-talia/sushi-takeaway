import React, { useState } from "react";
import Title from "../Title";

// Mock review data
const mockReviews = [
  {
    id: 1,
    rating: 4.5,
    text: "Great experience!",
    icon: "https://example.com/icon1.png",
    name: "John Doe",
    google: "google",
  },
  {
    id: 2,
    rating: 3.8,
    text: "Could be better.",
    icon: "https://example.com/icon2.png",
    name: "Jane Smith",
    google: "google",
  },
  {
    id: 3,
    rating: 5.0,
    text: "Excellent service!",
    icon: "https://example.com/icon3.png",
    name: "Alice Johnson",
    google: "google",
  },
  {
    id: 4,
    rating: 4.0,
    text: "Friendly staff.",
    icon: "https://example.com/icon4.png",
    name: "Michael Brown",
    google: "google",
  },
  {
    id: 5,
    rating: 4.2,
    text: "Good value for money.",
    icon: "https://example.com/icon5.png",
    name: "Emily Wilson",
    google: "google",
  },
  {
    id: 6,
    rating: 4.7,
    text: "Highly recommended!",
    icon: "https://example.com/icon6.png",
    name: "David Lee",
    google: "google",
  },
  {
    id: 7,
    rating: 3.5,
    text: "Average experience.",
    icon: "https://example.com/icon7.png",
    name: "Sarah Taylor",
    google: "google",
  },
  {
    id: 8,
    rating: 4.9,
    text: "Absolutely amazing!",
    icon: "https://example.com/icon8.png",
    name: "Chris Evans",
    google: "google",
  },
  {
    id: 9,
    rating: 4.3,
    text: "Prompt service.",
    icon: "https://example.com/icon9.png",
    name: "Michelle Rodriguez",
    google: "google",
  },
  {
    id: 10,
    rating: 3.9,
    text: "Satisfactory experience.",
    icon: "https://example.com/icon10.png",
    name: "Daniel Martinez",
    google: "google",
  },
];

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
      prevIndex === 0 ? mockReviews.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === mockReviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleReviews = Array.from({ length: reviewsPerPage }).map(
    (_, index) => {
      const reviewIndex = (currentIndex + index) % mockReviews.length;
      return mockReviews[reviewIndex];
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
