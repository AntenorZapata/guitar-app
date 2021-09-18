import React, { useState, useEffect } from 'react';
import fields from '../../service/formFields';

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

export default function Form({ handleSubmit, handleValue, state }) {
  return (
    <div>
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
    </div>
  );
}
