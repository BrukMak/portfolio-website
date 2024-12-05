import React from 'react';
import './style.css'; // Import the styles here


const LoadingScreen = () => {
  return (
    <div id="loading-screen">
      <div className="loading-logo-container">
        <img src= "LoadingLion.jpeg" alt="Loading Logo" className="loading-logo  " />
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
