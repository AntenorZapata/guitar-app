import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createGuitarData, deleteGuitarData, updateGuitarData } from '../actions';
// import fields from '../service/formFields';
import GuitarTable from '../components/table/GuitarTable';
import useSort from '../hooks/useSort';

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
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem('user')) || null;

  const dispatch = useDispatch();

  const guitars = useSelector((state) => state.guitars.allGuitars);
  const { sortNumber, sortName } = useSort();

  const [guitarTable, setGuitarTable] = useState([]);
  const [state, setState] = useState(initialState);
  const [order, setOrder] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setGuitarTable(guitars);
  }, [guitars]);

  useEffect(() => {
    setState(initialState);
    setOrder(!order);
  }, [guitarTable]);

  const handleValue = ({ target }) => {
    const { name } = target;
    setState({
      ...state,
      [name]: Array.isArray(state[name])
        ? target.value.split(',')
        : target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const guitar = guitarTable.find((gt) => gt._id === state._id);
    let err = '';
    if (guitar) {
      err = await dispatch(updateGuitarData(state));
    } else {
      err = await dispatch(createGuitarData(state));
    }
    if (err) {
      setError(true);
      setState(initialState);
    }
  };

  const handleEditTable = (id) => {
    const guitar = guitarTable.find((gt) => gt._id === id);
    setState(guitar);
  };

  const handleDeleteRow = async (id) => {
    const res = await dispatch(deleteGuitarData(id));
    if (res) {
      setError(true);
      setState(initialState);
    }
  };

  const handleSort = (e) => {
    let stateSort = [];
    const numbers = ['year', 'price', 'likeCount'];
    const mySubString = e.target.outerHTML.substring(
      e.target.outerHTML.indexOf('"') + 1,
      e.target.outerHTML.lastIndexOf('"'),
    );
    if (mySubString === 'id') return null;
    if (numbers.includes(mySubString)) {
      stateSort = sortNumber(guitarTable, mySubString, order);
    } else {
      stateSort = sortName(guitarTable, mySubString, order);
    }
    setGuitarTable(stateSort);
  };

  return (
    <>
      <Header />
      <div className="user-data">
        <p>
          Nome:
          {user && user.name}
        </p>
        <p>
          Email:
          {` ${user && user.email}`}
        </p>
        <p>
          Cargo:
          {user && user.role === 'user' ? 'Visitante' : 'admin'}
        </p>
        {user && user.role !== 'admin' && (
        <p className={error ? 'unauthorized' : ''}>
          Apenas administradores têm permissão para adicionar, editar ou remover uma guitarra.
        </p>
        )}
      </div>
      <div className="admin-painel">
        <Form handleSubmit={handleSubmit} state={state} handleValue={handleValue} />
        <div>
          <h4>tabela</h4>
          <GuitarTable
            guitarTable={guitarTable}
            handleDeleteRow={handleDeleteRow}
            handleEditTable={handleEditTable}
            handleSort={handleSort}
            setGuitarTable={setGuitarTable}
          />
        </div>
      </div>

    </>
  );
}

export default AdminPanel;
