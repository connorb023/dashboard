import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '1rem' }}>
          <h2>Reviews</h2>
          <div style={{ backgroundColor: 'lightblue', height: '100px', width: '200px' }}>
          <p>1,281</p>
          </div>
        </div>
        <div style={{ marginRight: '1rem' }}>
          <h2>Average Rating</h2>
          <div style={{ backgroundColor: 'lightgreen', height: '100px', width: '200px' }}>
          <p>4.6</p>
          </div>
        </div>
        <div style={{ marginRight: '1rem' }}>
          <h2>Sentiment Analysis</h2>
          <div style={{ backgroundColor: 'pink', height: '100px', width: '200px' }}>
          <p>960</p>
          <p>122</p>
          <p>321</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Website Visitors</h2>
        <div style={{ backgroundColor: 'lightyellow', height: '100px', width: '620px' }}>
        <p>821</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
