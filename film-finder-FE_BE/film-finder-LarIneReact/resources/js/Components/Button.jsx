import PropTypes from 'prop-types';
import React from 'react';
function Button({ onClick = () => {}, text, className = "" }) {
  return (
    <button 
      onClick={onClick} 
      className={`rounded ${className}`}>
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Button;