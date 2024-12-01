import React from 'react';
import PropTypes from 'prop-types';
const CMSTableDrama = ({ columns, data, handleSave, handleDelete, showPopup }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-dark-card-bg text-dark-text">
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.accessor} className="py-3 px-4 border-b border-custom-gray text-left text-sm font-bold">{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="text-sm">
        {data.map(drama => (
          <tr key={drama.id} data-film-id={drama.id}>
            <td className="py-2 px-4 border-b border-gray-300 text-sm font-medium" contentEditable="true">{drama.title}</td>
            <td className="py-2 px-4 border-b border-gray-300 text-sm" contentEditable="true">{drama.genre}</td>
            <td className="py-2 px-4 border-b border-gray-300 text-sm" contentEditable="true">{drama.synopsis}</td>
            <td className="py-2 px-4 border-b border-gray-300 text-center">
              <button className={`status-button ${drama.status.toLowerCase()} py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2`} onClick={() => showPopup(drama.title, drama.id)}>{drama.status}</button>
            </td>
            <td className="py-2 px-4 border-b border-gray-300 text-center">
              <div className="flex justify-center space-x-2">
                <button className="bg-custom-blue-light text-dark-text py-1 px-3 rounded-md hover:bg-dark-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue-dark" onClick={() => handleSave(drama.id)}>Save</button>
                <button className="bg-red-400 text-white py-1 px-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" onClick={() => handleDelete(drama.id)}>Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
CMSTableDrama.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    Header: PropTypes.string.isRequired,
    accessor: PropTypes.string.isRequired,
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  handleSave: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  showPopup: PropTypes.func.isRequired,
};
export default CMSTableDrama;