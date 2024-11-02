import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CMSTable = (props) => {
  const { data, columns, handleSave, handleDelete, idAccessor } = props;
  const [editedData, setEditedData] = useState({});
  const [editMode, setEditMode] = useState({}); // State untuk melacak mode edit

  const handleInputChange = (e, rowId, accessor) => {
    const value = e.target.innerText; // Mengambil nilai dari elemen contentEditable
    setEditedData((prevData) => {
      const newData = {
        ...prevData,
        [rowId]: {
          ...prevData[rowId],
          [accessor]: value,
        },
      };
      console.log('Edited Data:', newData); // Menampilkan log state editedData
      return newData;
    });
  };

  const handleSaveClick = (rowId) => {
    const updatedRow = editedData[rowId];
    if (updatedRow) {
      const currentRow = data.find(row => row[idAccessor] === rowId);
      const mergedRow = { ...currentRow, ...updatedRow }; // Gabungkan nilai saat ini dengan nilai yang diedit
      handleSave(rowId, mergedRow);
      setEditedData((prevData) => {
        const newData = { ...prevData };
        delete newData[rowId];
        return newData;
      });
      setEditMode((prevMode) => ({ ...prevMode, [rowId]: false })); // Menonaktifkan mode edit setelah menyimpan
    } else {
      alert('No changes detected.');
    }
  };

  const handleEditClick = (rowId) => {
    alert('Edit mode activated for row ID: ' + rowId);
    setEditMode((prevMode) => ({ ...prevMode, [rowId]: true })); // Mengaktifkan mode edit
  };

  const isAnyRowInEditMode = Object.values(editMode).some((mode) => mode);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-dark-card-bg text-dark-text">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="py-3 px-4 border-b border-custom-gray text-left text-sm font-bold"
                style={{ width: column.width || 'auto' }}
              >
                {column.Header}
              </th>
            ))}
            <th className="py-3 px-4 border-b border-custom-gray text-left text-sm font-bold" style={{ width: '180px' }}>Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {data.map((row) => (
            <tr key={row[idAccessor]}>
            {columns.map((column) => (
              <td
                key={typeof column.accessor === 'string' ? column.accessor : column.accessor.name}
                className="py-2 px-4 border-b border-gray-300 text-sm font-medium"
                contentEditable={editMode[row[idAccessor]] && column.editable}
                suppressContentEditableWarning={true}
                onBlur={(e) => handleInputChange(e, row[idAccessor], typeof column.accessor === 'string' ? column.accessor : column.accessor.name)}
              >
                {typeof column.accessor === 'string' ? (
                  column.accessor === 'url_actor' ? (
                    <a href={row[column.accessor]} target="_blank" rel="noopener noreferrer">
                      <img src={row[column.accessor]} alt="Actor" className="h-16 w-16 object-cover rounded-full" />
                    </a>
                  ) : (
                    row[column.accessor]
                  )
                ) : (
                    typeof row[column.accessor.name] === 'object' && !Array.isArray(row[column.accessor.name]) ? (
                      column.accessor.child_accessor ? (
                        row[column.accessor.name][column.accessor.child_accessor]
                      ) : (
                        JSON.stringify(row[column.accessor.name]) // Jika tidak ada child_accessor, tampilkan objek sebagai string
                      )
                    ) : (
                      row[column.accessor.name]
                    )
                )}
              </td>
            ))}              
            <td className="py-2 px-4 border-b border-gray-300 text-center">
                <div className="flex justify-center space-x-2">
                  {editMode[row[idAccessor]] ? (
                    <>
                      <button
                        className="bg-custom-blue-light text-dark-text py-1 px-3 rounded-md hover:bg-dark-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue-dark"
                        onClick={() => handleSaveClick(row[idAccessor])}
                      >
                        Save
                      </button>
                      <button
                        className="bg-red-500 text-dark-text py-1 px-3 rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        onClick={() => setEditMode((prevMode) => ({ ...prevMode, [row[idAccessor]]: false }))}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-yellow-500 text-dark-text py-1 px-3 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                        onClick={() => handleEditClick(row[idAccessor])}
                        disabled={isAnyRowInEditMode} // Nonaktifkan tombol jika ada baris lain dalam mode edit
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-dark-text py-1 px-3 rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        onClick={() => handleDelete(row[idAccessor])}
                        disabled={isAnyRowInEditMode} // Nonaktifkan tombol jika ada baris lain dalam mode edit
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

CMSTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    Header: PropTypes.string,
    accessor: PropTypes.string,
    width: PropTypes.string,
    editable: PropTypes.bool,
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSave: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  idAccessor: PropTypes.string.isRequired, // Tambahkan propTypes untuk idAccessor
};

export default CMSTable;