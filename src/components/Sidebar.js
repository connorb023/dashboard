import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Reviews</Link>
        </li>
        <li>
          <Link to="/rating">Average Rating</Link>
        </li>
        <li>
          <Link to="/sentiment">Sentiment Analysis</Link>
        </li>
        <li>
          <Link to="/visitors">Website Visitors</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;


