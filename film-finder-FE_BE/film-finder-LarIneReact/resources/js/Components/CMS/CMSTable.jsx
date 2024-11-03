import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CMSTable = (props) => {
  const { data, columns, handleSave, handleDelete, idAccessor } = props;
  const [editedData, setEditedData] = useState({});
  const [editMode, setEditMode] = useState({});

  const handleInputChange = (e, rowId, accessor, isBoolean) => {
    const value = isBoolean ? e.target.value === 'Yes' : e.target.value;
    setEditedData((prevData) => {
      const newData = {
        ...prevData,
        [rowId]: {
          ...prevData[rowId],
          [accessor]: value,
        },
      };
      console.log('Edited Data:', newData);
      return newData;
    });
  };

  const handleSaveClick = (rowId) => {
    const updatedRow = editedData[rowId];
    if (updatedRow) {
      const currentRow = data.find(row => row[idAccessor] === rowId);
      const mergedRow = { ...currentRow, ...updatedRow };
      handleSave(rowId, mergedRow);
      setEditedData((prevData) => {
        const newData = { ...prevData };
        delete newData[rowId];
        return newData;
      });
      setEditMode((prevMode) => ({ ...prevMode, [rowId]: false }));
    } else {
      alert('No changes detected.');
    }
  };

  const handleEditClick = (rowId) => {
    alert('Edit mode activated for row ID: ' + rowId);
    setEditMode((prevMode) => ({ ...prevMode, [rowId]: true }));
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
              {columns.map((column) => {
                const isBoolean = typeof row[column.accessor] === 'boolean';
                return (
                  <td
                    key={typeof column.accessor === 'string' ? column.accessor : column.accessor.name}
                    className="py-2 px-4 border-b border-gray-300 text-sm font-medium"
                  >
                    {editMode[row[idAccessor]] && column.editable ? (
                      isBoolean ? (
                        <select
                          value={editedData[row[idAccessor]]?.[column.accessor] !== undefined ? (editedData[row[idAccessor]][column.accessor] ? 'Yes' : 'No') : (row[column.accessor] ? 'Yes' : 'No')}
                          onChange={(e) => handleInputChange(e, row[idAccessor], column.accessor, true)}
                          className="border rounded px-2 py-1 text-black w-full"
                        >
                          <option className='text-black' value="Yes">Yes</option>
                          <option className='text-black' value="No">No</option>
                        </select>
                      ) : (
                        <div
                          contentEditable
                          suppressContentEditableWarning={true}
                          onBlur={(e) => handleInputChange(e, row[idAccessor], typeof column.accessor === 'string' ? column.accessor : column.accessor.name, false)}
                          className="w-full h-full"
                        >
                          {editedData[row[idAccessor]]?.[column.accessor] ?? row[column.accessor]}
                        </div>
                      )
                    ) : (
                      isBoolean ? (
                        row[column.accessor] ? 'Yes' : 'No'
                      ) : typeof column.accessor === 'string' ? (
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
                            JSON.stringify(row[column.accessor.name])
                          )
                        ) : (
                          row[column.accessor.name]
                        )
                      )
                    )}
                  </td>
                );
              })}
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
                        disabled={isAnyRowInEditMode}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-dark-text py-1 px-3 rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        onClick={() => handleDelete(row[idAccessor])}
                        disabled={isAnyRowInEditMode}
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
  idAccessor: PropTypes.string.isRequired,
};

export default CMSTable;