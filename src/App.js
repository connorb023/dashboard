import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Reviews />
        <Rating />
        <SentimentAnalysis />
        <Visitors />
      </div>
    </div>
  );
}

export default App;
