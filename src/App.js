import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Reviews from './Reviews';
import AverageRating from './AverageRating';
import SentimentAnalysis from './SentimentAnalysis';
import WebsiteVisitors from './WebsiteVisitors';
import Settings from './Settings';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reviews">Reviews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/average-rating">Average Rating</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sentiment-analysis">Sentiment Analysis</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/website-visitors">Website Visitors</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settings">Settings</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Switch>
          <Route path="/" exact>
            <h1>Dashboard</h1>
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/average-rating">
            <AverageRating />
          </Route>
          <Route path="/sentiment-analysis">
            <SentimentAnalysis />
          </Route>
          <Route path="/website-visitors">
            <WebsiteVisitors />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
