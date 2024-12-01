import PropTypes from 'prop-types';

function AuthForm(props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative z-10">
      <div className="max-w-md w-full p-8 space-y-6 bg-gray-800 rounded-lg shadow-md">
        <div className="text-center">
          <img className="mx-auto h-[150px] w-auto" src={props.imageUrl} alt="Logo" />
          <h2 className="text-3xl font-extrabold text-white">{props.title}</h2>
          <p className="mt-2 text-sm text-gray-400">{props.subtitle}</p>
        </div>
        <form className="mt-8 space-y-4" onSubmit={props.onSubmit}>
          {props.children}
        </form>
      </div>
    </div>
  );
}

AuthForm.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default AuthForm;