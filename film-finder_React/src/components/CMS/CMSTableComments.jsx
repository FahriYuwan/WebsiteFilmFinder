import PropTypes from 'prop-types';

const CMSTableComments = (props) => {
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
          </tr>
        </thead>
        <tbody id ="comments-table-body" className="text-sm">
          {props.data.map((row) => (
            <tr key={row.id}>
              {props.columns.map((column) => (
                <td
                  key={column.accessor}
                  className="py-2 px-4 border-b border-gray-300 text-sm font-medium"
                  contentEditable={column.editable}
                >
                  {column.accessor === 'picture' ? (
                    <img src={row[column.accessor]} alt="Actor" className="h-10 w-10 object-cover rounded-full" />
                  ) : (
                    row[column.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

CMSTableComments.propTypes = {
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

export default CMSTableComments;