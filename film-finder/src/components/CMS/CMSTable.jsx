import PropTypes from 'prop-types';
const CMSTable = (props) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-dark-card-bg text-dark-text">
        <thead>
          <tr>
            {props.columns.map((column) => (
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
          {props.data.map((row) => (
            <tr key={row.id}>
              {props.columns.map((column) => (
                <td
                  key={column.accessor}
                  className="py-2 px-4 border-b border-gray-300 text-sm font-medium"
                  contentEditable={column.editable}
                >
                  {row[column.accessor]}
                </td>
              ))}
              <td className="py-2 px-4 border-b border-gray-300 text-center">
                <div className="flex justify-center space-x-2">
                  <button
                    className="bg-custom-blue-light text-dark-text py-1 px-3 rounded-md hover:bg-dark-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-blue-dark"
                    onClick={() => props.handleSave(row.id)}
                  >
                    Save
                  </button>
                  <button
                    className="bg-red-500 text-dark-text py-1 px-3 rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    onClick={() => props.handleDelete(row.id)}
                  >
                    Delete
                  </button>
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
};
export default CMSTable;