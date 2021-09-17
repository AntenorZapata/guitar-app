import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createGuitarData, deleteGuitarData, updateGuitarData } from '../../actions';
import fields from '../../service/formFields';
import GuitarTable from '../table/GuitarTable';
import useSort from '../../hooks/useSort';

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

export default function Form() {
  const dispatch = useDispatch();

  const history = useHistory();

  const guitars = useSelector((state) => state.guitars.allGuitars);
  const { sortNumber, sortName } = useSort();

  const [guitarTable, setGuitarTable] = useState([]);
  const [state, setState] = useState(initialState);
  const [order, setOrder] = useState(true);

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
    const guitar = await guitarTable.find((gt) => gt._id === state._id);
    let err = '';
    if (guitar) {
      err = await dispatch(updateGuitarData(state));
    } else {
      err = await dispatch(createGuitarData(state));
    }

    if (err) {
      localStorage.clear();
      history.push('/login');
    }
  };

  const handleEditTable = (id) => {
    const guitar = guitarTable.find((gt) => gt._id === id);
    setState(guitar);
  };

  const handleDeleteRow = async (id) => {
    await dispatch(deleteGuitarData(id));
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
    <div className="form-table">
      <form className="form" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.value}>{field.label}</label>
            <input
              type={field.type}
              id={field.value}
              name={field.value}
              value={state[field.value]}
              onChange={handleValue}
              required
            />
          </div>
        ))}
        <button type="submit">Criar guitarra</button>
      </form>
      <div className="table">
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
  );
}
