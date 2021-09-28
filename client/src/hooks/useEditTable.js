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
      err = dispatch(updateGuitarData(state));
    } else {
      err = dispatch(createGuitarData(state));
    }
    setStep(1);
    setState(initialState);
  };

  const handleEditTable = (id,
    guitarTable, setState, state, initialState) => {
    const guitar = guitarTable.find((gt) => gt._id === id);
    if (state === guitar) {
      setState(initialState);
    } else {
      setState(guitar);
    }
  };

  const handleDeleteRow = async (id, {
    setState, initialState, page, setPage,
  }, value) => {
    if (value[page].length === 1
    ) setPage(0);
    const res = await dispatch(deleteGuitarData(id));
    if (res) {
      setState(initialState);
    }
  };

  return { handleSubmit, handleDeleteRow, handleEditTable };
}

export default useEditTable;
