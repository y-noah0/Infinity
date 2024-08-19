import React from 'react';
import ReactDOM from 'react-dom';
import '../css/features.css';

const Feature = () => {
  return (
    <div className="container">
      <div className="left-section">
        <h1>Whether you're starting small or going big, Toast is built for you</h1>
        <img 
          src="https://via.placeholder.com/400" 
          alt="Devices showing the Toast app" 
          className="devices-image" 
        />
      </div>
      <div className="right-section">
        <div className="card">
          <h2>New Business Opening</h2>
          <p>Our POS system software is designed to cater to various industries, including bars,Our POS system software is designed</p>
          <a href="#" className="learn-more">Learn More</a>
        </div>
        <div className="card">
          <h2>New Business Opening</h2>
          <p>Our POS system software is designed to cater to various industries, including bars,Our POS system software is designed</p>
          <a href="#" className="learn-more">Learn More</a>
        </div>
        <div className="card">
          <h2>New Business Opening</h2>
          <p>Our POS system software is designed to cater to various industries, including bars,Our POS system software is designed</p>
          <a href="#" className="learn-more">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Feature

