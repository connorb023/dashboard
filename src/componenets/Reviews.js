import React from "react";
import reviewsData from "../data/reviews.json";
import "./Reviews.css";

function Reviews() {
  return (
    <div className="Reviews">
      <h2>Reviews</h2>
      <ul>
        {reviewsData.map((review) => (
          <li key={review.id}>
            <p>{review.text}</p>
            <p>{review.author}</p>
          </li>
        ))}
      </ul>
      <form>
        <label htmlFor="reviewText">Add a review:</label>
        <textarea id="reviewText" name="reviewText" />
        <label htmlFor="reviewAuthor">Your name:</label>
        <input type="text" id="reviewAuthor" name="reviewAuthor" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reviews;
