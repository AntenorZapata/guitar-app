import React, { useState, useEffect } from 'react';
import titles from '../../service/tableTitles';
import useSort from '../../hooks/useSort';

export default function GuitarTable({
  guitarTable,
  handleDeleteRow,
  handleEditTable,
  setState,
  order,
  setGuitarTable,
  initialState,
}) {
  const [filters, setFilters] = useState(false);
  const [valueFilter, setValueFilter] = useState([]);
  const { handleSort } = useSort();

  useEffect(() => {
    setValueFilter(guitarTable);
  }, [guitarTable]);

  const handleGuitarFilter = (e, el) => {
    const { state } = el;
    const { target: { value } } = e;

    if (value !== '') {
      const results = guitarTable.filter((gt) => {
        if (Array.isArray(gt[state])) {
          const field = gt[state].join('');
          return field.toLowerCase().startsWith(value.toLowerCase());
        }
        if (typeof gt[state] === 'number') {
          return gt[state].toString().startsWith(value.toLowerCase());
        }
        return gt[state].toLowerCase().startsWith(value.toLowerCase());
      });
      setValueFilter(results);
    } else {
      setValueFilter(guitarTable);
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
                  onChange={(e) => handleGuitarFilter(e, el)}
                />
              </th>
            ))}
          </tr>

        </thead>
        <tbody>
          {valueFilter && valueFilter.length > 0
            ? (valueFilter.map((gt) => (
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
                  <button onClick={() => handleEditTable(gt._id, guitarTable, setState)} type="button">
                    edit
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDeleteRow(gt._id, setState, initialState)} type="button">
                    delete
                  </button>
                </td>
              </tr>
            ))) : <tr><td>Not Found</td></tr> }
        </tbody>
      </table>
    </div>
  );
}
