import React, { useState, useEffect } from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { IoFilterSharp } from 'react-icons/io5';
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
    <>
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
                <IoFilterSharp
                  className="table-icon filter-icon"
                  type="button"
                  onClick={() => setFilters(!filters)}
                />
              </th>
              <th className="sort-warning">
                <div className="msg-popup">
                  Clique nos títulos para ordernar a tabela.
                </div>
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
                  <td data-col-title="Marca">{gt.brand}</td>
                  <td data-col-title="Modelo">{gt.model}</td>
                  <td data-col-title="Ano">{gt.year}</td>
                  <td data-col-title="Resumo">{gt.summary}</td>
                  <td data-col-title="Descrição">{gt.description}</td>
                  <td data-col-title="Guitarrista">{gt.player}</td>
                  <td data-col-title="Músicas">{gt.songs}</td>
                  <td data-col-title="Preço">{gt.price}</td>
                  <td data-col-title="Imagem de Capa">
                    <img
                      src={`./images/${gt.imageCover}`}
                      alt="fender 1"
                      className="card__picture-table"
                    />
                  </td>
                  <td data-col-title="Imagens">{gt.images}</td>
                  <td data-col-title="Link">{gt.link}</td>
                  <td data-col-title="Tags">{gt.tags}</td>
                  <td data-col-title="Likes">{gt.likeCount}</td>
                  <td>
                    <AiTwotoneEdit
                      className="table-icon"
                      onClick={() => handleEditTable(gt._id,
                        guitarTable, setState, state, initialState)}
                      type="button"
                    />
                  </td>
                  <td>
                    <RiDeleteBin2Fill
                      className="table-icon remove-table-icon"
                      onClick={() => handleDeleteRow(gt._id, {
                        setState, initialState, page, setPage,
                      }, paginate(valueFilter, 5))}
                      type="button"
                    />

                  </td>
                </tr>
              ))) : <tr><td>Not found</td></tr> }
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
    </>
  );
}
