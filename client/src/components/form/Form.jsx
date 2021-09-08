import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGuitarData } from '../../actions';
import fields from '../../services/formFields';

export default function form() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
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
  });

  const handleValue = ({ target }) => {
    const { name } = target;
    setState({
      ...state,
      [name]: Array.isArray(state[name]) ? target.value.split(', ') : target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createGuitarData(state));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (

          <label htmlFor={field.value} key={field.id}>
            {field.label}
            <input
              type={field.type}
              id={field.value}
              name={field.value}
              value={state[field.value]}
              onChange={handleValue}
            />
          </label>

        ))}
        <button type="submit">Criar guitarra</button>
      </form>

    </div>
  );
}
