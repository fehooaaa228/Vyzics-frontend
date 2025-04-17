// src/components/Review.js
import React from 'react';
import './Review.css';

const Review = ({ quote, author, details }) => {
  return (
    <div className="review">
      <div className="quote-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f">
        <path d="M0 0h24v24H0z" fill="none"/><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
      </svg>
      </div>
      <div className="review-content">
        <p className="quote">{quote}</p>
        <p className="author">{author} - {details}</p>
      </div>
    </div>
  );
};

export default Review; // Default export