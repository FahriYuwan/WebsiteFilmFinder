import PropTypes from 'prop-types';

function Button(props) {
return (
    <button
        type={props.type}
        className="w-64 bg-custom-blue-dark text-white py-2 px-4 rounded-md hover:bg-custom-orange focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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