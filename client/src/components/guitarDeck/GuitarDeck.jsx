import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import GuitarCard from '../guitarCard/GuitarCard';

export default function GuitarDeck({ guitars }) {
  // const guitars = useSelector((state) => state.guitars.allGuitars);

  return (
    <div className="guitar-deck">
      {guitars && guitars.length > 0 && guitars.map((gt) => (
        <GuitarCard guitar={gt} key={gt._id} />
      ))}
    </div>
  );
}
