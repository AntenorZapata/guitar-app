import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function HomeFilters({ handleValue, handleClearFilters, state }) {
  return (
    <div className="home-filters">
      <div className="filters-links">
        <p>5 guitarras mais baratas</p>
        <p>5 guitarras mais raras</p>
        <p>5 melhores guitarras</p>
      </div>
      <div className="filters-text">
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <div className="radios-btns">
            <label htmlFor="brand">
              Marca
              <input
                type="radio"
                id="brand"
                name="filter"
                onChange={handleValue}
              />
            </label>
            <label htmlFor="model">
              Modelo
              <input type="radio" id="model" name="filter" onChange={handleValue} />
            </label>
            <label htmlFor="player">
              Guitarrista
              <input type="radio" id="player" name="filter" onChange={handleValue} />
            </label>
          </div>
          <input value={state.search} type="text" placeholder="Pesquisar" name="search" onChange={handleValue} />
          <div className="by-price-container">
            <span>Preço</span>
            <div className="by-price">
              <input value={state.min} type="number" name="min" placeholder="min" onChange={handleValue} />
              <p>-</p>
              <input value={state.max} type="number" name="max" placeholder="max" onChange={handleValue} />
            </div>
          </div>
          <button
            type="button"
            className="clear-filters"
            onClick={handleClearFilters}
          >
            Limpar Filtros
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomeFilters;
