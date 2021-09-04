import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGuitarData } from '../../actions/guitars';

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
        <label htmlFor="brand">
          Brand
          <input type="text" id="brand" name="brand" onChange={handleValue} />
        </label>
        <label htmlFor="model">
          Model
          <input type="text" id="model" name="model" onChange={handleValue} />
        </label>
        <label htmlFor="year">
          Year
          <input type="number" id="year" name="year" onChange={handleValue} />
        </label>
        <label htmlFor="summary">
          Summary
          <input type="text" id="summary" name="summary" onChange={handleValue} />
        </label>
        <label htmlFor="description">
          Description
          <input type="text" id="description" name="description" onChange={handleValue} />
        </label>
        <label htmlFor="player">
          Player
          <input type="text" id="player" name="player" onChange={handleValue} />
        </label>
        <label htmlFor="songs">
          Songs
          <input type="text" id="songs" name="songs" onChange={handleValue} />
        </label>
        <label htmlFor="price">
          Price
          <input type="number" id="price" name="price" onChange={handleValue} />
        </label>
        <label htmlFor="image-cover">
          image-cover
          <input type="text" id="image-cover" name="imageCover" onChange={handleValue} />
        </label>
        <label htmlFor="images">
          Images
          <input type="text" id="images" name="images" onChange={handleValue} />
        </label>
        <label htmlFor="link">
          Link
          <input type="text" id="link" name="link" onChange={handleValue} />
        </label>

        <label htmlFor="tags">
          Tags
          <input type="text" id="tags" name="tags" onChange={handleValue} />
        </label>
        <label htmlFor="likes">
          Likes
          <input type="number" id="likes" name="likeCount" onChange={handleValue} />
        </label>
        <button type="submit">Criar guitarra</button>
      </form>
    </div>
  );
}
