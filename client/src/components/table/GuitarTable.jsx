import React, { useState, useEffect } from 'react';
import titles from '../../service/tableTitles';
import useSort from '../../hooks/useSort';
import paginate from '../../utils/paginate';
import useGuitarFilter from '../../hooks/useGuitarFilter';
import useEditTable from '../../hooks/useEditTable';

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
    <div>
      <table
        rules="none"
        border="1"
        className="guitar-table"
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
          </tr>
          <tr>
            <th />
            {filters
            && titles.slice(1).map((el, index) => (
              <th key={el.id}>
                <input
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
                <td>{gt._id}</td>
                <td>{gt.brand}</td>
                <td>{gt.model}</td>
                <td>{gt.year}</td>
                <td>{gt.summary}</td>
                <td>{gt.description}</td>
                <td>{gt.player}</td>
                <td>{gt.songs}</td>
                <td>{gt.price}</td>
                <td>{gt.imageCover}</td>
                <td>{gt.images}</td>
                <td>{gt.link}</td>
                <td>{gt.tags}</td>
                <td>{gt.likeCount}</td>
                <td>
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
  );
}
