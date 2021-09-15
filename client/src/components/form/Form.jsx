import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createGuitarData } from '../../actions';
import fields from '../../service/formFields';

const initialState = {
  brand: '',
  model: '',
  year: '',
  summary: '',
  description: '',
  songs: [],
  price: 0,
  imageCover: '',
  images: [],
  link: '',
  tags: [],
  likeCount: 0,
};

export default function form() {
  const dispatch = useDispatch();
  const [guitarTable, setGuitarTable] = useState([
    {
      id: uuidv4(), brand: 'stratocaster', model: 'fender', year: 2020, summary: 'muito boa',
    },
    {
      id: uuidv4(), brand: 'ibanez', model: 'fly V', year: 1990, summary: 'guitarra boa demais',
    },
  ]);
  const [state, setState] = useState(initialState);

  const handleValue = ({ target }) => {
    const { name } = target;
    setState({
      ...state,
      [name]: Array.isArray(state[name]) ? target.value.split(', ') : target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const guitar = guitarTable.find((gt) => gt.id === state.id);
    let newState = [];
    if (guitar) newState = guitarTable.filter((el) => el !== guitar);
    const id = uuidv4();
    setGuitarTable((prev, _props) => (!guitar ? ([...prev, { id, ...state }])
      : [{ id, ...state }, ...newState]));
    // dispatch(createGuitarData(state));
  };

  useEffect(() => {
    setState(initialState);
  }, [guitarTable]);

  const handleEditTable = (id) => {
    const guitar = guitarTable.find((gt) => gt.id === id);
    setState(guitar);
  };

  const handleDeleteRow = (id) => {
    const guitar = guitarTable.find((gt) => gt.id === id);
    let newState = [];
    if (guitar) newState = guitarTable.filter((el) => el !== guitar);
    setGuitarTable(newState);
  };

  const data = guitarTable.map((gt, index) => (
    <tr key={gt.id}>
      <td>{gt.id}</td>
      <td>{gt.brand}</td>
      <td>{gt.model}</td>
      <td>{gt.year}</td>
      <td>{gt.summary}</td>
      <td><button onClick={() => handleEditTable(gt.id)} type="button">edit</button></td>
      <td><button onClick={() => handleDeleteRow(gt.id)} type="button">delete</button></td>
    </tr>
  ));

  return (
    <div className="form-table">
      <form className="form" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.value}>
              {field.label}
            </label>
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
        <table border="1">
          <tbody>
            {data}
          </tbody>
        </table>
      </div>
    </div>
  );
}
