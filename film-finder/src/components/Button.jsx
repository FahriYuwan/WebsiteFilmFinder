import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button
      type={props.type}
      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;