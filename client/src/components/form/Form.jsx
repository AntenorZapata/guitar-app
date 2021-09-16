import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createGuitarData } from '../../actions';
import fields from '../../service/formFields';
import GuitarTable from '../table/GuitarTable';

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

export default function form() {
  const dispatch = useDispatch();

  // Estado Teste
  const [guitarTable, setGuitarTable] = useState([
    {
      id: uuidv4(),
      brand: 'stratocaster',
      model: 'fender',
      year: 2020,
      summary: 'muito boa',
      description: 'maravilhosa',
      player: 'david gilmour',
      songs: ['TUdo bem', 'eu não nasci ontem'],
      price: 4553,
      imageCover: 'guitarrona.png',
      images: 'alguem.jpg, fuiEu.png',
      link: 'www.google.com',
      tags: 'cordas, pedaleira',
      likeCount: 1,
    },
    {
      id: uuidv4(),
      brand: 'ibanez',
      model: 'fly V',
      year: 1992,
      description: 'pense numa guitarra',
      summary: 'guitarra boa demais',
      player: 'balf loren',
      songs: ['bmor de mãe', 'feliz'],
      price: 3500,
      imageCover: 'capa.jpg',
      images: 'tudo.jpg, essa.png',
      link: 'www.youtube.com',
      tags: 'amor, carro, britadeira',
      likeCount: 10,
    },

  ]);
  const [state, setState] = useState(initialState);
  const [order, setOrder] = useState(true);

  const handleValue = ({ target }) => {
    const { name } = target;
    setState({
      ...state,
      [name]: Array.isArray(state[name])
        ? target.value.split(',')
        : target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const guitar = guitarTable.find((gt) => gt.id === state.id);
    let newState = [];
    if (guitar) newState = guitarTable.filter((el) => el !== guitar);
    const id = uuidv4();
    setGuitarTable((prev, _props) => (!guitar
      ? [...prev, { id, ...state }] : [{ id, ...state }, ...newState]));
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
    const newState = guitarTable.filter((el) => el !== guitar);
    setGuitarTable(newState);
  };

  // Componentizar o sort

  const handleSort = (e) => {
    let newState = [];
    const numbers = ['year', 'price', 'likeCount'];
    const mySubString = e.target.outerHTML.substring(
      e.target.outerHTML.indexOf('"') + 1,
      e.target.outerHTML.lastIndexOf('"'),
    );

    if (mySubString === 'id') return null;

    if (numbers.includes(mySubString)) {
      newState = [...guitarTable].sort((a, b) => {
        if (order) {
          return +a[mySubString] - +b[mySubString];
        }
        return +b[mySubString] - +a[mySubString];
      });
    } else {
      newState = [...guitarTable].sort((a, b) => {
        const valueA = Array.isArray(a[mySubString])
          ? a[mySubString].join('').toUpperCase() : a[mySubString].toUpperCase();
        const valueB = Array.isArray(b[mySubString])
          ? b[mySubString].join('').toUpperCase() : b[mySubString].toUpperCase();

        if (valueA < valueB) return order ? 1 : -1;
        if (valueA > valueB) return order ? -1 : 1;
        return 0;
      });
    }
    setGuitarTable(newState);
  };

  useEffect(() => {
    setOrder(!order);
  }, [guitarTable]);

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
        />
      </div>
    </div>
  );
}
