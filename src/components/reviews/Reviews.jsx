import React from "react";
import Title from "../Title";

// Mock review data
const mockReviews = [
  {
    id: 1,
    rating: 5,
    text: "Great place!",
    icon: "icon",
    name: "Peter S.",
    google: "google",
  },
  {
    id: 2,
    rating: 4,
    text: "Awesome service!",
    icon: "icon",
    name: "Peter S.",
    google: "google",
  },
  {
    id: 3,
    rating: 3,
    text: "Could be better.",
    icon: "icon",
    time: "a year ago",
    name: "Peter S.",
    google: "google",
  },
  {
    id: 4,
    rating: 4,
    text: "Awesome service!",
    icon: "icon",
    name: "Peter S.",
    google: "google",
  },
];

function Reviews() {
  return (
    <div className="text-white">
      <Title text="ANMELDELSER FRA VORES KUNDE" />
      <ul>
        {mockReviews.map((review) => (
          <li key={review.id}>
            <div>{review.rating}</div>
            <p>{review.text}</p>
            <p>{review.icon}</p>
            <span>{review.name}</span>
            <span>{review.time}</span>
            <div>{review.google}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
