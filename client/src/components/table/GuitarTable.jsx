import React, { useState, useEffect } from 'react';
import titles from '../../service/tableTitles';
import useSort from '../../hooks/useSort';
import paginate from '../../utils/paginate';
import useGuitarFilter from '../../hooks/useGuitarFilter';
import useEditTable from '../../hooks/useEditTable';
import './GuitarTable.css';
import sort from '../../imgs/sort.png';

export default function GuitarTable({
  guitarTable,
  setState,
  order,
  setGuitarTable,
  initialState,
  state,
}) {
  const [filters, setFilters] = useState(false);
  const [valueFilter, setValueFilter] = useState([]);
  const { handleSort } = useSort();
  const [page, setPage] = useState(0);
  const { handleGuitarFilter } = useGuitarFilter();
  const { handleSubmit, handleDeleteRow, handleEditTable } = useEditTable();

  useEffect(() => {
    setValueFilter(guitarTable);
  }, [guitarTable]);

  const handlePagination = (e) => {
    const { name } = e.target;

    if (name === 'next') {
      setPage((prev) => prev + 1);
    } else {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="responsive-container">
      <table
        rules="none"
        border="1"
        className="smart-table"
      >
        <thead>
          <tr>
            {titles.map((title) => (
              <th
                key={title.id}
                name={title.state}
                onClick={(e) => handleSort(e, guitarTable,
                  order, setGuitarTable)}
              >
                {title.value}
              </th>
            ))}
            <th>
              <button
                type="button"
                onClick={() => setFilters(!filters)}
              >
                Filtros
              </button>
            </th>
            <th className="sort-warning">
              <img src={sort} alt="sort" />
            </th>
          </tr>
          <tr>
            <th />
            {filters
            && titles.slice(1).map((el, index) => (
              <th key={el.id}>
                <input
                  className="table-filters-input"
                  type="text"
                  onChange={(e) => handleGuitarFilter(e, el,
                    guitarTable, setValueFilter)}
                />
              </th>
            ))}
          </tr>

        </thead>
        <tbody>
          {valueFilter && valueFilter.length > 0
            ? (paginate(valueFilter, 5)[page].map((gt) => (
              <tr key={gt._id}>
                <td data-col-title="ID">{gt._id}</td>
                <td data-col-title="brand">{gt.brand}</td>
                <td data-col-title="model">{gt.model}</td>
                <td data-col-title="year">{gt.year}</td>
                <td data-col-title="summary">{gt.summary}</td>
                <td data-col-title="description">{gt.description}</td>
                <td data-col-title="player">{gt.player}</td>
                <td data-col-title="songs">{gt.songs}</td>
                <td data-col-title="price">{gt.price}</td>
                <td data-col-title="imageCover">{gt.imageCover}</td>
                <td data-col-title="images">{gt.images}</td>
                <td data-col-title="link">{gt.link}</td>
                <td data-col-title="tags">{gt.tags}</td>
                <td data-col-title="likeCount">{gt.likeCount}</td>
                <td data-col-title="btn">
                  <button
                    onClick={() => handleEditTable(gt._id,
                      guitarTable, setState, state, initialState)}
                    type="button"
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteRow(gt._id, {
                      setState, initialState, page, setPage,
                    }, paginate(valueFilter, 5))}
                    type="button"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))) : <tr><td>Not Found</td></tr> }
        </tbody>
      </table>
      <div className="btns-table">
        <button
          disabled={page === paginate(valueFilter, 5).length - 1}
          onClick={handlePagination}
          type="button"
          name="next"
        >
          Proximo
        </button>
        {page > 0 && (
        <button
          type="button"
          name="back"
          onClick={handlePagination}
        >
          Voltar
        </button>
        )}
      </div>
    </div>
  );
}
