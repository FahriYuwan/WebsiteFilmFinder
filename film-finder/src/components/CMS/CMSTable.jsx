import PropTypes from 'prop-types';

function CMSTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b border-gray-200">Id</th>
            <th className="py-2 px-4 border-b border-gray-200">Name</th>
            <th className="py-2 px-4 border-b border-gray-200">Age</th>
            <th className="py-2 px-4 border-b border-gray-200" style={{ width: '50px' }}>Edit</th>
            <th className="py-2 px-4 border-b border-gray-200" style={{ width: '50px' }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">{row.id}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.age}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">Edit</button>
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

CMSTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CMSTable;