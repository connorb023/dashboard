import reviewsData from '../data/reviews.json';
import '../styles/Rating.css';

function Rating() {
  const ratings = reviewsData.map((review) => review.rating);
  const averageRating = Math.round(
    ratings.reduce((total, rating) => total + rating) / ratings.length
  );
  const ratingCounts = Array.from({ length: 5 }, (_, index) =>
    ratings.filter((rating) => rating === index + 1).length
  );
  const maxCount = Math.max(...ratingCounts);

  return (
    <div className="rating">
      <h1>Average Rating: {averageRating}</h1>
      <div className="graph">
        {ratingCounts.map((count, index) => (
          <div
            key={index}
            className={`bar ${count === maxCount ? 'highlight' : ''}`}
            style={{ height: `${(count / ratings.length) * 100}%` }}
          >
            <div className="label">{index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rating;
