import React, { useState } from 'react';

function StarRating({
  count, value, size = 24, onChange,
}) {
  const stars = Array.from({ length: count }, () => '★');

  const handleChange = (index) => {
    onChange(index + 1);
  };

  return (
    <div>
      {stars.map((s, index) => (
        <span
          className={index < value ? 'active-star' : 'off-star'}
          key={index}
          onClick={() => handleChange(index)}
          onKeyDown={handleChange}
          role="button"
          tabIndex={0}
        >
          {s}
        </span>
      ))}
    </div>
  );
}

export default StarRating;
