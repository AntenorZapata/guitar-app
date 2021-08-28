import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import GuitarCard from './components/guitarCard/GuitarCard';

import getGuitars from './actions/guitars';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGuitars());
  }, [dispatch]);

  return (
    <div>
      <GuitarCard />
    </div>
  );
}
