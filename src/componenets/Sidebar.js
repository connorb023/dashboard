import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="nav-links">
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#rating">Rating</a></li>
        <li><a href="#sentiment">Sentiment Analysis</a></li>
        <li><a href="#visitors">Website Visitors</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;

