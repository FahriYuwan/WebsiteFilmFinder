import RegisterHeader from './RegisterHeader';
import RegisterForm from './RegisterForm';
import backgroundImage from '../../assets/images/Background.png';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div
      className="bg-gray-100 w-full min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Register Form */}
      <div className="relative z-10 max-w-md w-full p-6 space-y-4 bg-gray-800 rounded-lg shadow-md">
        <RegisterHeader />
        <RegisterForm />
        <div className="mt-6 text-center text-sm text-gray-300">
          Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;