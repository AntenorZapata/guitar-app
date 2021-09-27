import React from 'react';
import { useDispatch } from 'react-redux';
import { createGuitarData, deleteGuitarData, updateGuitarData } from '../actions';

function useEditTable() {
  const dispatch = useDispatch();

  const handleSubmit = async (e, {
    guitarTable,
    state, setStep, setState, initialState,
  }) => {
    e.preventDefault();
    const guitar = guitarTable.find((gt) => gt._id === state._id);
    let err = '';
    if (guitar) {
      err = await dispatch(updateGuitarData(state));
    } else {
      err = await dispatch(createGuitarData(state));
    }
    setStep(1);
    if (err) {
      setState(initialState);
    }
  };

  const handleEditTable = (id, guitarTable, setState) => {
    const guitar = guitarTable.find((gt) => gt._id === id);
    setState(guitar);
  };

  const handleDeleteRow = async (id, setState, initialState) => {
    const res = await dispatch(deleteGuitarData(id));
    if (res) {
      setState(initialState);
    }
  };

  return { handleSubmit, handleDeleteRow, handleEditTable };
}

export default useEditTable;
