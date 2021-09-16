import React from 'react';

const titles = [
  { id: 1, value: 'Id', state: 'id' },
  { id: 2, value: 'Marca', state: 'brand' },
  { id: 4, value: 'Modelo', state: 'model' },
  { id: 3, value: 'Ano', state: 'year' },
  { id: 5, value: 'Resumo', state: 'summary' },
  { id: 6, value: 'Descrição', state: 'description' },
  { id: 7, value: 'Guitarrista', state: 'player' },
  { id: 8, value: 'Músicas', state: 'songs' },
  { id: 9, value: 'Preço', state: 'price' },
  { id: 10, value: 'Imagem da Capa', state: 'imageCover' },
  { id: 11, value: 'Imagens', state: 'images' },
  { id: 12, value: 'Link', state: 'link' },
  { id: 13, value: 'Tags', state: 'tags' },
  { id: 14, value: 'Likes', state: 'likeCount' },
];

function GuitarTable({
  guitarTable,
  handleDeleteRow,
  handleEditTable,
  handleSort,
}) {
  return (
    <div>
      <table border="1" className="guitar-table">
        <tbody>
          <tr>
            {titles.map((title) => (
              <th key={title.id} name={title.state} onClick={handleSort}>{title.value}</th>
            ))}
          </tr>
          {guitarTable.map((gt) => {
            const arr = Object.values(gt);
            return (
              <tr key={gt.id}>
                {arr.map((el, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <td key={index}>{el}</td>
                ))}
                <td>
                  <button onClick={() => handleEditTable(gt.id)} type="button">
                    edit
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDeleteRow(gt.id)} type="button">
                    delete
                  </button>
                </td>
              </tr>

            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GuitarTable;
