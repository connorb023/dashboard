import visitorsData from '../data/visitors.json';
import '../styles/Visitors.css';

function Visitors() {
  const dates = visitorsData.map((visitor) => visitor.date);
  const counts = visitorsData.map((visitor) => visitor.count);
  const maxCount = Math.max(...counts);

  return (
    <div className="visitors">
      <h1>Website Visitors</h1>
      <div className="graph">
        {counts.map((count, index) => (
          <div
            key={index}
            className={`bar ${count === maxCount ? 'highlight' : ''}`}
            style={{ height: `${(count / maxCount) * 100}%` }}
          >
            <div className="label">{dates[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Visitors;
