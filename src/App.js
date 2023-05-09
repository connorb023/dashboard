import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import Rating from './components/Rating';
import SentimentAnalysis from './components/SentimentAnalysis';
import Visitors from './components/Visitors';
import './styles/App.css';


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
