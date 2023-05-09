import { useState } from 'react';
import reviewsData from '../data/reviews.json';
import '../styles/Reviews.css';

function Reviews() {
  const [reviews, setReviews] = useState(reviewsData);
  const [newReview, setNewReview] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setReviews([...reviews, { text: newReview }]);
    setNewReview('');
  }

  return (
    <div className="reviews">
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review.text}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Add a Review:
          <input
            type="text"
            value={newReview}
            onChange={(event) => setNewReview(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reviews;
