import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import GuitarCard from '../guitarCard/GuitarCard';

export default function GuitarDeck() {
  const guitars = useSelector((state) => state.guitars.allGuitars);

  return (
    <div>
      {guitars && guitars.map((gt) => (
        <GuitarCard guitar={gt} key={gt._id} />
      ))}
    </div>
  );
}
