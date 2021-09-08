import React from 'react';
import { useSelector } from 'react-redux';

export default function GuitarCard() {
  const guitars = useSelector((state) => state.guitars.result);

  return (
    <div>
      {guitars && guitars.map((gt) => <h3 key={gt._id}>{gt.brand}</h3>)}
    </div>
  );
}
