import React from 'react';
import titles from '../../service/tableTitles';

export default function GuitarTable({
  guitarTable,
  handleDeleteRow,
  handleEditTable,
  handleSort,
}) {
  return (
    <div>
      <table border="1" className="guitar-table">
        <thead>
          <tr>
            {titles.map((title) => (
              <th key={title.id} name={title.state} onClick={handleSort}>{title.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {guitarTable.map((gt) => (
            <tr key={gt._id}>
              {/* render table dynamically
              const arr = Object.values(gt); */}
              {/* {arr.map((el) => (
                  <td>{el}</td>
                ))} */}
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
                <button onClick={() => handleEditTable(gt._id)} type="button">
                  edit
                </button>
              </td>
              <td>
                <button onClick={() => handleDeleteRow(gt._id)} type="button">
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
