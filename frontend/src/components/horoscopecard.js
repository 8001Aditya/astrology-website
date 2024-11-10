// src/components/HoroscopeCard.js
import React from 'react';

const HoroscopeCard = ({ sign, description, date }) => {
  return (
    <div className="horoscope-card">
      <h2>{sign} Horoscope</h2>
      <p>{date}</p>
      <p>{description}</p>
    </div>
  );
};

export default HoroscopeCard;
