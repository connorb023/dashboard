import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '1rem' }}>
          <h2>Reviews</h2>
          <div style={{ backgroundColor: 'lightblue', height: '100px', width: '200px' }}>
            {/* Add content for reviews container here */}
          </div>
        </div>
        <div style={{ marginRight: '1rem' }}>
          <h2>Average Rating</h2>
          <div style={{ backgroundColor: 'lightgreen', height: '100px', width: '200px' }}>
            {/* Add content for average rating container here */}
          </div>
        </div>
        <div style={{ marginRight: '1rem' }}>
          <h2>Sentiment Analysis</h2>
          <div style={{ backgroundColor: 'pink', height: '100px', width: '200px' }}>
            {/* Add content for sentiment analysis container here */}
          </div>
        </div>
      </div>
      <div>
        <h2>Website Visitors</h2>
        <div style={{ backgroundColor: 'lightyellow', height: '100px', width: '620px' }}>
          {/* Add content for website visitors container here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
