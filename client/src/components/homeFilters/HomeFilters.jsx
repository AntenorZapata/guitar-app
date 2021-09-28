import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './HomeFilters.css';

function HomeFilters({
  handleValue, handleClearFilters, state, handleTopGuitars,
}) {
  return (
    <div className="home__filters">
      <div className="filters__links">
        <div className="filters-left">
          <button
            type="button"
            className="btn-top-filters"
            onClick={handleTopGuitars}
            value="cheap"
          >
            Top 5 mais baratas
          </button>
          <button
            type="button"
            className="btn-top-filters"
            onClick={handleTopGuitars}
            value="rare"
          >
            Top 5 mais raras
          </button>
        </div>
        <div className="filters-right">
          <button
            type="button"
            className="btn-top-filters"
            onClick={handleTopGuitars}
            value="fender"
          >
            Top 5 Fender mais baratas
          </button>
          <button
            type="button"
            className="btn-top-filters"
            onClick={handleTopGuitars}
          >
            Todas as guitarras
          </button>
        </div>
      </div>
      <div className="filters__text">
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <div className="radio__btns">
            <label htmlFor="brand">
              <input
                type="radio"
                id="brand"
                name="filter"
                onChange={handleValue}
              />
              Marca

            </label>
            <label htmlFor="model">
              <input type="radio" id="model" name="filter" onChange={handleValue} />
              Modelo
            </label>
            <label htmlFor="player">
              <input type="radio" id="player" name="filter" onChange={handleValue} />
              Guitarrista
            </label>
          </div>
          <input
            value={state.search}
            type="text"
            placeholder="Pesquisar"
            name="search"
            onChange={handleValue}
            className="search__by__text"
          />
          <div className="by-price__btns">
            <span>Preço:</span>
            <div className="by-price">
              <input value={state.min} type="number" name="min" placeholder="min" onChange={handleValue} />
              <p>-</p>
              <input value={state.max} type="number" name="max" placeholder="max" onChange={handleValue} />
            </div>
          </div>
          <div className="clear__filters__container">
            <button
              type="button"
              className="clear-filters"
              onClick={handleClearFilters}
            >
              Limpar Filtros
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default HomeFilters;
