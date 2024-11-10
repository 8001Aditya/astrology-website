// src/components/ZodiacCompatibility.js
import React, { useState } from 'react';

const ZodiacCompatibility = () => {
  const [sign1, setSign1] = useState('');
  const [sign2, setSign2] = useState('');
  const [compatibility, setCompatibility] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assume a mock compatibility check logic
    const result = `${sign1} and ${sign2} are highly compatible!`;
    setCompatibility(result);
  };

  return (
    <div className="compatibility-form">
      <h2>Check Zodiac Compatibility</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter First Zodiac Sign:</label>
          <input
            type="text"
            value={sign1}
            onChange={(e) => setSign1(e.target.value)}
            placeholder="e.g., Aries"
          />
        </div>
        <div>
          <label>Enter Second Zodiac Sign:</label>
          <input
            type="text"
            value={sign2}
            onChange={(e) => setSign2(e.target.value)}
            placeholder="e.g., Taurus"
          />
        </div>
        <button type="submit">Check Compatibility</button>
      </form>
      {compatibility && <p>{compatibility}</p>}
    </div>
  );
};

export default ZodiacCompatibility;
