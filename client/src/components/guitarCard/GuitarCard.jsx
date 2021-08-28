import React from 'react';
import { useSelector } from 'react-redux';

export default function guitarCard() {
  const { cards } = useSelector((state) => state.guitars);
  console.log(cards);

  return (
    <div>
      {cards.map((el) => <h1 key={el.model}>{el.brand}</h1>)}
    </div>
  );
}
