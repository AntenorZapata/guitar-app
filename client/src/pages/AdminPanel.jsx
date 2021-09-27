import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createGuitarData, deleteGuitarData, updateGuitarData } from '../actions';
import useValidation from '../hooks/useValidation';
import GuitarTable from '../components/table/GuitarTable';
import useSort from '../hooks/useSort';
import useEditTable from '../hooks/useEditTable';

import Form from '../components/form/Form';
import Header from '../components/header/Header';

const initialState = {
  brand: '',
  model: '',
  year: '',
  summary: '',
  description: '',
  player: '',
  songs: [],
  price: 0,
  imageCover: '',
  images: [],
  link: '',
  tags: [],
  likeCount: 0,
};

function AdminPanel() {
  const guitars = useSelector((state) => state.guitars.allGuitars);
  const { handleSubmit, handleDeleteRow, handleEditTable } = useEditTable();

  const history = useHistory();
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [guitarTable, setGuitarTable] = useState([]);
  const [state, setState] = useState(initialState);
  const [order, setOrder] = useState(true);
  const [step, setStep] = useState(1);

  useEffect(() => {
    setGuitarTable(guitars);
  }, [guitars]);

  useEffect(() => {
    setState(initialState);
    setOrder(!order);
  }, [guitarTable]);

  useEffect(() => {
    if (!token) {
      history.push('/');
    }
  }, []);

  const handleValue = ({ target }) => {
    const { name } = target;
    setState({
      ...state,
      [name]: Array.isArray(state[name])
        ? target.value.split(',')
        : target.value,
    });
  };

  return (
    <>
      <Header />
      <div className="user-data">
        <p>
          Apenas administradores têm permissão para adicionar, editar ou remover uma guitarra.
        </p>
      </div>
      <div className="admin-painel">
        <div>
          <Form
            handleSubmit={(e) => handleSubmit(e, {
              guitarTable,
              state,
              setStep,
              setState,
              initialState,
            })}
            state={state}
            handleValue={handleValue}
            step={step}
            setStep={setStep}
          />
        </div>
        <div>
          <h4>tabela</h4>
          <GuitarTable
            guitarTable={guitarTable}
            handleDeleteRow={handleDeleteRow}
            handleEditTable={handleEditTable}
            initialState={initialState}
            setState={setState}
            order={order}
            setGuitarTable={setGuitarTable}
          />
        </div>
      </div>

    </>
  );
}

export default AdminPanel;
