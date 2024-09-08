import PropType from 'prop-types';

function InputField(props){
  return (
    <div>
      <label htmlFor={props.id} className="sr-only">{props.name}</label>
      <input 
        id={props.id} 
        name={props.name} 
        type={props.type} 
        placeholder={props.placeholder} 
        value={props.value}
        onChange={props.onChange}
        className="w-full text-black px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        required 
        accept={props.accept}
      />
    </div>
  );
};

InputField.propTypes = {
  id: PropType.string.isRequired,
  name: PropType.string.isRequired,
  type: PropType.string.isRequired,
  placeholder: PropType.string.isRequired,
  value: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  accept: PropType.string
};

export default InputField;
