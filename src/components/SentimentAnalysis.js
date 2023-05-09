import reviewsData from '../data/reviews.json';
import '../styles/SentimentAnalysis.css';

function SentimentAnalysis() {
  const sentiments = reviewsData.map((review) => review.sentiment);
  const sentimentCounts = {
    positive: sentiments.filter((sentiment) => sentiment === 'positive').length,
    neutral: sentiments.filter((sentiment) => sentiment === 'neutral').length,
    negative: sentiments.filter((sentiment) => sentiment === 'negative').length,
  };
  const totalCount = sentiments.length;
  const positivePercentage = (sentimentCounts.positive / totalCount) * 100;
  const neutralPercentage = (sentimentCounts.neutral / totalCount) * 100;
  const negativePercentage = (sentimentCounts.negative / totalCount) * 100;

  return (
    <div className="sentiment-analysis">
      <h1>Sentiment Analysis</h1>
      <div className="pie-chart">
        <div
          className="slice positive"
          style={{ '--percentage': `${positivePercentage}%` }}
        />
        <div
          className="slice neutral"
          style={{ '--percentage': `${neutralPercentage}%` }}
        />
        <div
          className="slice negative"
          style={{ '--percentage': `${negativePercentage}%` }}
        />
      </div>
      <div className="legend">
        <div className="positive">{`Positive: ${positivePercentage.toFixed(
          1
        )}%`}</div>
        <div className="neutral">{`Neutral: ${neutralPercentage.toFixed(
          1
        )}%`}</div>
        <div className="negative">{`Negative: ${negativePercentage.toFixed(
          1
        )}%`}</div>
      </div>
    </div>
  );
}

export default SentimentAnalysis;
