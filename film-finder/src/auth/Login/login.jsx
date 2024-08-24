import LoginForm from './LoginForm.jsx'; // Path ke LoginForm.js

function Login () {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
