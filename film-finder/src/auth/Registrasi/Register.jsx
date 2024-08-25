import RegisterForm from './RegisterForm.jsx'; // Path ke RegisterForm.js

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-8 text-custom-blue-dark">SIGN UP- FilmFinder</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
