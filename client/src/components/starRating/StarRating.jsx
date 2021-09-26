import React, { Component } from 'react';
import { AiFillStar } from 'react-icons/ai';

function StarRating({ bool, starValue, onChange }) {
  const num = 5;
  return (
    <div className="star-rating">
      {[...Array(num)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label htmlFor={bool ? index : 'id'} key={index}>
            <input
              id={index}
              type="radio"
              name="starValue"
              value={ratingValue}
              onClick={() => onChange(ratingValue)}
            />
            <AiFillStar
              color={ratingValue <= starValue ? '#000000' : '#a9a9a9'}
              className="star"
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;

// import React, { useState } from 'react';

// function StarRating({
//   count, value, onChange, click,
// }) {
//   const stars = Array.from({ length: count }, () => '★');

//   const handleChange = (index) => {
//     onChange(index + 1);
//   };

//   return (
//     <div>
//       {stars.map((s, index) => (
//         <span
//           className={index < value ? 'active-star' : 'off-star'}
//           key={index}
//           onClick={() => handleChange(index)}
//           onKeyDown={handleChange}
//           role="button"
//           tabIndex={0}
//         >
//           {s}
//         </span>
//       ))}
//     </div>
//   );
// }

// export default StarRating;
