import React from 'react';
import { useSelector } from 'react-redux';

export default function GuitarCard() {
  const guitars = useSelector((state) => state.guitars);

  return (

    <div>
      {guitars.map((el) => <h1 key={el.model}>{el.model}</h1>)}
    </div>
  );
}
