import React from 'react';

const CMSTableDrama = ({ columns, data, handleDelete, showPopup }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-dark-text bg-gray-800">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.Header}
                style={{ width: column.width }}
                className="px-4 py-2 bg-gray-900 text-white"
              >
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((drama, index) => (
            <tr
              key={drama.film_id}
              className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-600'}
            >
              <td className="border px-4 py-2 text-white">{drama.title}</td>
              <td className="border px-4 py-2 text-white">
                {drama.genres.map((genre) => genre.genre_name).join(', ')}
              </td>
              <td className="border px-4 py-2 text-white">
                {drama.synopsis.length > 100
                  ? drama.synopsis.substring(0, 100) + '...'
                  : drama.synopsis}
              </td>
              <td className="border px-4 py-2 text-white capitalize">
                {drama.status}
              </td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => showPopup(drama.title, drama.film_id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Detail
                </button>
                <button
                  onClick={() => handleDelete(drama.film_id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CMSTableDrama;