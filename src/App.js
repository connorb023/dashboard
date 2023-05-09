import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import Rating from './components/Rating';
import SentimentAnalysis from './components/SentimentAnalysis';
import Visitors from './components/Visitors';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div className="main">
          <Route path="/" exact component={Reviews} />
          <Route path="/rating" component={Rating} />
          <Route path="/sentiment" component={SentimentAnalysis} />
          <Route path="/visitors" component={Visitors} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
